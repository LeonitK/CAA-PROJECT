from flask import Blueprint, render_template, request, redirect, url_for

mod_main = Blueprint('main', __name__)
from werkzeug import secure_filename
from os.path import join, dirname, realpath, os

UPLOAD_FOLDER = join(dirname(realpath(__file__)), "../static/uploads/")


@mod_main.route('/', methods=['GET'])
def index():
    return render_template('index.html')
