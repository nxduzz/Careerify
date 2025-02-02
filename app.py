from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Quiz data (optional: can be fetched from a database)
quiz_data = [
    {
        "question": "Which activity do you enjoy the most?",
        "options": [
            {"label": "Conducting experiments", "value": "biomaths"},
            {"label": "Writing code", "value": "computer_science"},
            {"label": "Painting or drawing", "value": "arts"},
            {"label": "Reading novels", "value": "humanities"}
        ]
    },
    # Add more questions here...
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit_quiz', methods=['POST'])
def submit_quiz():
    answers = request.json.get('answers')
    scores = {}
    for answer in answers:
        scores[answer] = scores.get(answer, 0) + 1
    recommended_stream = max(scores, key=scores.get)
    return jsonify({"recommended_stream": recommended_stream})

if __name__ == '__main__':
    app.run(debug=True)
