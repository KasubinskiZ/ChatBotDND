# Created by Zander at 9/30/2023
from flask import Flask, render_template, request, jsonify, redirect, url_for, make_response

app = Flask(__name__, template_folder='static/HTML')

@app.route("/", methods=["GET"])
def index():
    return render_template('index.html')

@app.route('/character_sheet', methods=["GET"])
def character_sheet():
    response = make_response(render_template('character_sheet.html'))
    return response

@app.route('/postmethod', methods = ['POST'])
def get_post_javascript_data():
    #jsdata = request.form['javascript_data'] #this renders new form
    data = request.get_json()  # add force=True in get_json if forgot to add header in JS
    print(data)
    return jsonify(data)


if __name__ == '__main__':
    app.run(port=8000)
    #app.run(host="0.0.0.0", port=8000, debug=True)