# UI Styling Rules

- When building or modifying complex absolute-positioned UI components (like mega menus, dropdowns, or modals), Tailwind padding utility classes (e.g., `px-6`, `p-4`) may be unexpectedly stripped or overridden by global configurations. In these specific cases, ALWAYS use explicit React inline styles for padding (e.g., `style={{ padding: '20px 28px' }}`) to guarantee that the spacing renders correctly.
