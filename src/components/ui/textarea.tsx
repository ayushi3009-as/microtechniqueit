import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  type TextareaHTMLAttributes,
} from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  autoResize?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, label, error, hint, id, autoResize = false, onChange, ...props },
    ref
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const internalRef = useRef<HTMLTextAreaElement | null>(null);

    const resize = useCallback(() => {
      const el = internalRef.current;
      if (!el || !autoResize) return;
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    }, [autoResize]);

    useEffect(() => {
      resize();
    }, [resize]);

    const setRefs = useCallback(
      (node: HTMLTextAreaElement | null) => {
        internalRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = node;
        }
      },
      [ref]
    );

    return (
      <div className="space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-zinc-300"
          >
            {label}
          </label>
        )}

        <textarea
          ref={setRefs}
          id={inputId}
          className={cn(
            'flex min-h-[100px] w-full rounded-xl px-4 py-3 text-sm',
            'border bg-zinc-900/50 backdrop-blur-sm',
            'text-zinc-100 placeholder:text-zinc-600',
            'transition-all duration-200 resize-none',
            'focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-zinc-950',
            error
              ? 'border-red-500/50 focus:ring-red-500/30'
              : 'border-zinc-800 focus:border-indigo-500/50 focus:ring-indigo-500/30',
            'disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
          }
          onChange={(e) => {
            onChange?.(e);
            resize();
          }}
          {...props}
        />

        {error && (
          <p
            id={`${inputId}-error`}
            className="text-xs text-red-400"
            role="alert"
          >
            {error}
          </p>
        )}

        {hint && !error && (
          <p id={`${inputId}-hint`} className="text-xs text-zinc-500">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
