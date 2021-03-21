from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "GPT-2 Backend Health"


@app.route("/upload_text", methods=['POST'])
def upload_text():
    input = request.get_json()['text']
    # Write your inference logic here
    output = 'Hello World'
    return jsonify({'msg': 'Successfully upload text', 'result': output}), 200


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True, threaded=True)
