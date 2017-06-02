from flask import Flask, request, render_template
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')
@app.route("/about")
def about():
    return "sha je be tu foelen %s" %request.method
if __name__ == '__main__':
    app.run(host='0.0.0.0',
       port=82, debug=True)
