from flask import Flask,request
import json, os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

headers = {"Access-Control-Allow-Origin": "*"}

client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)

app = Flask(__name__)
app.config['SECRET_KEY'] = "hello2"

@app.route('/create_quiz',methods=['POST'])
def create_quiz():
    # start request
    print("Initializing connection to server")

    #Loading topic that students want to ask
    print("Loading the topic")
    with open("topic.json") as f:
        topic = json.load(f)["topic"]
    print(topic)
    print("Topic loaded")

    #make request
    print("Sending request for answer to gpt-3.5")

    question_json_format = """
        {
        "question":<the question>,
        "choices":<array of multiple choices, in the form of [
        "A": <answer1>
        "B": <answer2>
        "C": <answer3>
        "D": <answer4>
        ]>,
        "correctAns": <correct answer using A, B, C, D>
        }
    """
    system_prompt = f"Based on the topic: {topic}, generate a trivial type question and reply with ONLY following JSON format:{question_json_format}"


    #send request to gpt-3.5
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        response_format={"type":"json_object"},
        messages = [
            {
                "role": "system",
                "content": system_prompt,
            },
            {
                "role": "user",
                "content": f"Create question about this topic: {topic} json",
            },
        ],
    )

    #output generated
    print("Response received from gpt-3.5")
    response_content = response.choices[0].message.content
    print(response_content)

    json_answer = json.loads(response_content)


    return ({"response":json_answer}, 200, headers)

if __name__ == "__main__":
    app.run(debug=True)