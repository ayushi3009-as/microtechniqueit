from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, EmailStr
from motor.motor_asyncio import AsyncIOMotorClient
from passlib.context import CryptContext
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI(title="Microtechnique IT Backend")

# Setup CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this to frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB Configuration
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27018/")
client = AsyncIOMotorClient(MONGO_URI)
db = client.microtechnique_db
partners_collection = db.get_collection("partners")

# Password Hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)

# Pydantic Models
class PartnerRegistration(BaseModel):
    name: str
    email: EmailStr
    contactNo: str
    address: str
    state: str
    password: str

class PartnerResponse(BaseModel):
    id: str
    name: str
    email: str
    message: str

@app.post("/api/partners", response_model=PartnerResponse, status_code=status.HTTP_201_CREATED)
async def register_partner(partner: PartnerRegistration):
    # Check if email already exists
    existing_partner = await partners_collection.find_one({"email": partner.email})
    if existing_partner:
        raise HTTPException(status_code=400, detail="Email already registered")

    # Hash the password
    hashed_password = get_password_hash(partner.password)
    
    partner_dict = partner.model_dump(exclude={"password"})
    partner_dict["hashed_password"] = hashed_password
    
    # Insert into MongoDB
    result = await partners_collection.insert_one(partner_dict)
    
    return PartnerResponse(
        id=str(result.inserted_id),
        name=partner.name,
        email=partner.email,
        message="Partner registered successfully"
    )

@app.get("/")
async def root():
    return {"message": "Microtechnique IT API Backend is running"}
