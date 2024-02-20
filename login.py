from typing import Union 
from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel
import jwt
from fastapi.middleware.cors import CORSMiddleware

app=FastAPI()
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],

)
SECRET_KEY='9084eb9d443808b1420df7c16b0ee1e1da3388d2fc1c69110fe85a4b8b14b674'
ALGORITHM='HS256'
ACCESS_TOKEN_EXPIRE_MIN=60
required_user={
    'username':'ujjwalPuri',
    'password':'ujjwal321',
}

class LoginClass(BaseModel):
    username:str
    password:str

@app.get('/')
async def root():
    return {'main':'this is the main page'}

@app.post('/login')
async def login_user(login_item:LoginClass):
    data=jsonable_encoder(login_item)
    if required_user['username']==data['username'] and required_user['password']==data['password']:
        encoded_jwt=jwt.encode(data,SECRET_KEY,algorithm=ALGORITHM)
        return {'token':encoded_jwt,'data':'success'}
    else:
        return {'msg':'login failed'}