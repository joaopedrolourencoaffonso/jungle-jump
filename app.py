from flask import Flask, render_template, send_file


app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html");

@app.route('/game-over')
def game_over():
    return send_file('static/game-over.png')

@app.route('/sound')
def sound():
    return send_file('static/charge.mp3')

@app.route('/death-sound')
def death_sound():
    return send_file('static/death-sound.mp3')


if __name__ == "__main__":
    app.run(debug=True);
