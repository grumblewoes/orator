import requests
import json
from config import MISTRAL_URL

def generate_response(prompt):
    response_text = ""

    try:
        response = requests.post(
            MISTRAL_URL,
            json={"model": "mistral", "prompt": prompt, "stream": False}
        )
        for line in response.iter_lines():
            if line:
                data = json.loads(line.decode("utf-8"))
                response_text += data.get("response", "")
    except Exception as e:
        response_text = f"Error: {e}"

    return response_text

def analyze_client_msg(sentence):
    prompt = (
        "You are a language tutor for French. Analyze the following sentence for grammar and spelling issues, including mistakes with accented letters. "
        "If there are any mistakes, explain in English how to fix them. "
        "If there are no mistakes, simply state verbatim 'The sentence is grammatically corrrect' without any further elaboration, explanation, or translation.\n\n"
        f"Sentence: {sentence}"
    )

    return generate_response(prompt)
