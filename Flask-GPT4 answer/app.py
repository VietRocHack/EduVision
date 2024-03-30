from flask import Flask,request
from os import path
import json, os, time
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()


headers = {"Access-Control-Allow-Origin": "*"}

client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)

app = Flask(__name__)
app.config['SECRET_KEY'] = "hello"

# @functions_framework.http
@app.route('/find_answer', methods=['POST'])
def find_answer():

    # start request
    print("Initializing connection to server")
    
    #Loading topic that students want to ask
    print("Loading the topic")
    with open("topic.json") as f:
        topic = json.load(f)["topic"]
    print(topic)
    print("Topic loaded")

    # make request
    print("Sending request for answer to gpt-3.5")
    system_prompt = f"Give me a concise 100 words max explain this topic: {topic}"

    # send request to gpt-3.5
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        # response_format={"type":"json_object"},
        messages = [
            {
                "role": "system",
                "content": system_prompt,
            },
            {
                "role": "user",
                "content": f"Can you explain topic {topic} for me? json",
            },
        ],
    )

    #output generated
    print("Response received from gpt-3.5")
    output = response.choices[0].message.content
    # output = json.loads(generated_answer)

    return ({"response":output}, 200, headers)


if __name__ == "__main__":
    app.run(debug=True)