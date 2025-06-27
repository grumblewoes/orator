import requests
import json
from config import MISTRAL_URL

def generate_response(prompt: str) -> str:
    response_text = ""

    try:
        response = requests.post(
            MISTRAL_URL,
            json={"model": "mistral", "prompt": prompt, "stream": True},
            stream=True,
        )
        for line in response.iter_lines():
            if line:
                data = json.loads(line.decode("utf-8"))
                response_text += data.get("response", "")
    except Exception as e:
        response_text = f"Error: {e}"

    return response_text
