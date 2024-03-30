from flask import Flask
import json, os
from openai import OpenAI
from dotenv import load_dotenv
from pyngrok import ngrok, conf


load_dotenv()


headers = {"Access-Control-Allow-Origin": "*"}

client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)

conf.get_default().auth_token = os.environ.get("NGROK_AUTH_TOKEN")
connection_string = ngrok.connect("22", "tcp").public_url
ssh_url, port = connection_string.strip("tcp://").split(":")
print(f"{ssh_url} - p{port}")

app = Flask(__name__)
app.config['SECRET_KEY'] = "hello2"
port = 5001
public_url = ngrok.connect(port).public_url
print(f"connect here {public_url}")
app.config['BASE_URL'] = public_url

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
    app.run(host="0.0.0.0", port=port)