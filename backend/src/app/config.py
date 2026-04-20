import os
from dotenv import load_dotenv

load_dotenv()

# API Keys
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY", "")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")

# API URLs
GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"
GEMINI_API_KEY_PARAM = "?key=" + GOOGLE_API_KEY if GOOGLE_API_KEY else ""

# Headers padrão
DEFAULT_HEADERS = {
    "Content-Type": "application/json"
}
