from flask import Blueprint, render_template, request, redirect, url_for,Response
from app import mongo
from bson import ObjectId
import json

mod_main = Blueprint('main', __name__)

@mod_main.route('/', methods=['GET','POST'])
def index():
	if request.method == 'GET':
		return render_template('mod_main/index.html')

@mod_main.route('/dashboard', methods=['GET','POST'])
def dashboard():
	if request.method == 'GET':
		return render_template('mod_main/dashboard.html')

@mod_main.route('/user', methods=['GET','POST'])
def user():
	if request.method == 'GET':
		users = mongo.db.user.find()
		return render_template('mod_main/user.html', users=users)

@mod_main.route('/delete-user/<string:user_id>', methods=['GET','POST'])
def delete_user(user_id):
	mongo.db.user.remove({"_id": ObjectId(user_id)})
	return 'Me sukses u fshi useri nga DB'

@mod_main.route('/second-audit', methods=['GET','POST'])
def sec_audit():
	if request.method == 'GET':
		reports = mongo.db.reports.find()
		return render_template('mod_main/raport2.html', reports=reports)		


@mod_main.route('/contactAudit', methods=['GET','POST'])
def contactAudit():
	if request.method == 'GET':
		return render_template('mod_main/contact.html')	

@mod_main.route('/signUP', methods=['GET','POST'])
def signUP():
	if request.method == 'GET':
		return render_template('mod_main/signup.html')
	elif request.method == 'POST':
		data = request.form

		mongo.db.user.insert({
			"first_name": data['first_name'],
			"last_name": data['lastname'],
			"youremail": data['youremail'],
			"reenteremail": data['reenteremail'],
			"password": data['password'],
			"phoneNR": data['phoneNR'],
			})

		return redirect(url_for('main.index'))
			

@mod_main.route('/new-audit', methods=['GET','POST'])
def add_audit():
	if request.method == 'GET':
		return render_template('mod_main/NewAudit.html')
	elif request.method == 'POST':
		data = request.form
		mongo.db.reports.insert({
			"title": data['name'],
			"ref_num": data['ref_num'],
			"date": data['date'],
			"audit_type": data['audit_type'],
			"doc_name": data['doc_name']
		})
		return redirect(url_for('main.view_reports'))
		return redirect(url_for('/second-audit'))

@mod_main.route('/reports', methods=['GET','POST'])
def view_reports():
	if request.method == 'GET':
		reports = mongo.db.reports.find()
		return render_template('mod_main/raport.html', reports=reports)
		

@mod_main.route('/<string:raport_id>/edit', methods=['GET','POST'])
def edit_raport(raport_id):
	if request.method == 'GET':
		raport = mongo.db.reports.find({"_id": ObjectId(raport_id)})
		return render_template('mod_main/edit_raport.html', raport=raport)	
	elif request.method == 'POST':
		data = request.form

		mongo.db.reports.update({"_id":ObjectId(raport_id)},{
			"title": data['name'],
			"ref_num": data['ref_num'],
			"date": data['date'],
			"audit_type": data['audit_type'],
			"doc_name": data['doc_name']
		})
		return redirect(url_for('main.view_reports'))

@mod_main.route('/<string:raport_id>/delete', methods=['GET','POST'])
def del_raport(raport_id):
	raport = mongo.db.reports.remove({"_id": ObjectId(raport_id)})
	return redirect(url_for('main.view_reports'))


@mod_main.route('/login', methods=['GET'])
def login():
	return render_template('login.html')


@mod_main.route('/remove/<string:report_id>', methods=['GET','POST'])
def remove(report_id):
	if request.method == 'GET':
		mongo.db.reports.remove({"_id": ObjectId(report_id)})
		return Response(json.dumps({"removed": True}), mimetype='application/json')