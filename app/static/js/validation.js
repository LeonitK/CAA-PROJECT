$(document).ready(function() {

	// Qëllimi i njoftimit - Progress Bar handler
		$('#service-start, #grow-service, #service-removal').bind('change', function () {
			if($("#service-start").is(':checked') || $("#grow-service").is(':checked') || $("#service-removal").is(':checked')) {
				$(".sect1").css("background-color", "#26a69a");
				$(".sect1").css("color", "#fff");
				$("#step1").text("done");
			} else {
				$(".sect1").css("background-color", "white");
				$(".sect1").css("color", "rgba(0,0,0,0.87)");
				$("#step1").text("filter_1");
			}
		});

	// Të dhënat për ndërmarrësin - Progress Bar handler
			var emri_ndermarresit = $('#emri_ndermarresit'),
			 	numri_regjistrimit_biznesit = $('#numri_regjistrimit_biznesit'),
				numri_fiskal = $('#numri_fiskal'),
				adresa_ndermarresit = $('#adresa_ndermarresit'),
			    num_fax = $('#num_fax'),
				email_ndermarresit = $('#email_ndermarresit');

			$('#emri_ndermarresit, #numri_regjistrimit_biznesit, #numri_fiskal, #adresa_ndermarresit, #num_fax, #email_ndermarresit').bind('change', function(){
				if(emri_ndermarresit.val() && numri_regjistrimit_biznesit.val() && numri_fiskal.val() && adresa_ndermarresit.val() && num_fax.val() && email_ndermarresit.val() != ''){
		 			$(".sect2").css("background-color", "#26a69a");
		 			$(".sect2").css("color", "#fff");
					$("#step2").text("done");
		 		} else if (emri_ndermarresit.val() || numri_regjistrimit_biznesit.val() || numri_fiskal.val() || adresa_ndermarresit.val() || num_fax.val() || email_ndermarresit.val() == '') {
		 			$(".sect2").css("background-color", "white");
		 			$(".sect2").css("color", "rgba(0,0,0,0.87)");
					$("#step2").text("filter_2");
		 		}
			});
		 	
	// Të dhënat për zyrtarin ligjërisht të përgjegjëshëm - Progress Bar handler
		var emri_zyrtarit = $('#emri_zyrtarit'),
		 	adresa_zyrtarit = $('#adresa_zyrtarit'),
		 	numri_telefonit_zyrtarit = $('#numri_telefonit_zyrtarit'),
		 	num_fax_zyrtarit = $('#num_fax_zyrtarit'),
		 	email_address_zyrtarit = $('#email_address_zyrtarit'),
		 	num_id = $('#num_id');

		$("#emri_zyrtarit, #adresa_zyrtarit, #numri_telefonit_zyrtarit, #num_fax_zyrtarit, #email_address_zyrtarit, #num_id").bind('change', function(){
			if(emri_zyrtarit.val() && adresa_zyrtarit.val() && numri_telefonit_zyrtarit.val() && num_fax_zyrtarit.val() && email_address_zyrtarit.val() && num_id.val() != ''){
				$(".sect3").css("background-color", "#26a69a");
				$(".sect3").css("color", "#fff");
				$("#step3").text("done");
			} else if(emri_zyrtarit.val() || adresa_zyrtarit.val() || numri_telefonit_zyrtarit.val() || num_fax_zyrtarit.val() || email_address_zyrtarit.val() || num_id.val() == '') {
				$(".sect3").css("background-color", "white");
				$(".sect3").css("color", "rgba(0,0,0,0.87)");
				$("#step3").text("filter_3");
			}
		});

	// Aktivitetet të cilat njoftohen/çregjistrohen - Progress Bar handler
		$('#ofrimi_rrjetit_publik_fiks_lokal, #ofrimi_rrjetit_publik_fiks_nacional, #sherbime_tel_lokale_nacionale, #sherbime_tel_nderkombetare, #ofrimi_rrjetit_publik_mobil_lokal, #ofrimi_rrjetit_publik_mobil_nacional, #sherbime_tel_zerit, #transmetim_dhenash, #fiber_optik_pa_ndriqim, #linja_tjera_qira, #ofrimi_rrjetave_publike_transmetim_satelitor, #ofrimi_sherbimeve_publike_satelitore, #ofrimi_sherbimeve_publike_transmetimit_te_dhenave, #ofrimi_sherbime_me_vlere_te_shtuar').bind('change', function() {
			if($("#ofrimi_rrjetit_publik_fiks_lokal").is(':checked') || $("#ofrimi_rrjetit_publik_fiks_nacional").is(':checked') || $("#sherbime_tel_lokale_nacionale").is(':checked') || $("#sherbime_tel_nderkombetare").is(':checked') || $("#ofrimi_rrjetit_publik_mobil_lokal").is(':checked') || $("#ofrimi_rrjetit_publik_mobil_nacional").is(':checked') || $("#sherbime_tel_zerit").is(':checked') || $("#transmetim_dhenash").is(':checked') || $("#fiber_optik_pa_ndriqim").is(':checked') || $("#linja_tjera_qira").is(':checked') || $("#ofrimi_rrjetave_publike_transmetim_satelitor").is(':checked') || $("#ofrimi_sherbimeve_publike_satelitore").is(':checked') || $("#ofrimi_sherbimeve_publike_transmetimit_te_dhenave").is(':checked') || $("#ofrimi_sherbime_me_vlere_te_shtuar").is(':checked')) {
				$(".sect4").css("background-color", "#26a69a");
				$(".sect4").css("color", "#fff");
				$("#step4").text("done");
			} else {
				$(".sect4").css("background-color", "white");
				$(".sect4").css("color", "rgba(0,0,0,0.87)");
				$("#step4").text("filter_4");
			}
		});

	// Përshkrimi i aktivitetit dhe faza e ofrimit - Progress Bar handler
		var textarea1 = $('#pershkrimi_aktivetit_faza_ofrimit'),
			textarea2 = $('#faza_ofrimit');

		$("#pershkrimi_aktivetit_faza_ofrimit, #faza_ofrimit").bind('change', function(){
			if(textarea1.val() && textarea2.val() != ''){
				$(".sect5").css("background-color", "#26a69a");
				$(".sect5").css("color", "#fff");
				$("#step5").text("done");
			} else if(textarea1.val() || textarea2.val() == '') {
				$(".sect5").css("background-color", "white");
				$(".sect5").css("color", "rgba(0,0,0,0.87)");
				$("#step5").text("filter_5");
			}
		});

	// Dokumentet e bashkangjitura - Progress Bar handler
		var doc1 = $('#certifikata_regjistrimit_biznesit'),
			doc2 = $('#kopje_certifikates_numrit_fiskal'),
			doc3 = $('#kopje_dokumentit_informate_mbi_biznesin');
		$('#certifikata_regjistrimit_biznesit, #kopje_certifikates_numrit_fiskal, #kopje_dokumentit_informate_mbi_biznesin').bind('change', function(){
			if(doc1.val() && doc2.val() && doc3.val() != ''){
				$(".sect6").css("background-color", "#26a69a");
				$(".sect6").css("color", "#fff");
				$("#step6").text("done");
			} else if(doc1.val() && doc2.val() && doc3.val() == ''){
				$(".sect6").css("background-color", "white");
				$(".sect6").css("color", "rgba(0,0,0,0.87)");
				$("#step6").text("filter_6");
			}
		});

	// Konfirmimi i njoftimit - Progress Bar handler
		$('#konfirmimi_njoftimit_po, #konfirmimi_njoftimit_jo').bind('change', function(){
			if($('#konfirmimi_njoftimit_po').is(':checked') || $('#konfirmimi_njoftimit_jo').is(':checked')) {
				$(".sect7").css("background-color", "#26a69a");
				$(".sect7").css("color", "#fff");
				$("#step7").text("done");
			} else {
				$(".sect7").css("background-color", "white");
				$(".sect7").css("color", "rgba(0,0,0,0.87)");
				$("#step7").text("filter_7");
			}
		})

	// Detyrimet ligjore - Progress Bar handler
		var oldName = $('#emri_i_vjeter');
		$('#detyrimi_ligjor_1, #detyrimi_ligjor_2, #detyrimi_ligjor_3, #detyrimi_ligjor_4, #detyrimi_ligjor_5').bind('change', function() {
			if($('#detyrimi_ligjor_1').is(":checked") && $('#detyrimi_ligjor_2').is(":checked") && $('#detyrimi_ligjor_3').is(":checked") && $('#detyrimi_ligjor_4').is(":checked") && $('#detyrimi_ligjor_5').is(":checked")){
			$(".sect8").css("background-color", "#26a69a");
			$(".sect8").css("color", "#fff");
			$("#step8").text("done");
			} else {
				$(".sect8").css("background-color", "white");
				$(".sect8").css("color", "rgba(0,0,0,0.87)");
				$("#step8").text("filter_8");
			}
		})

	// Validation after clicking Submit
	
	$("form").submit(function(e) {	
		// Qëllimi i njoftimit - Validation
			var fillimi_sherbimit = $('#service-start').prop("checked");
			var shtimi_sherbimi = $('#grow-service').prop("checked");
			var heqje_sherbimi = $('#service-removal').prop("checked");
		 	if(!fillimi_sherbimit && !shtimi_sherbimi && !heqje_sherbimi){
		 		alert("Zgjedhni të paktën një qëllim tek 'Qëllimi i njoftimit'!");
		 		$('.section1').css('display', 'block');
		 		e.preventDefault(e);
		 	}

		// Të dhënat për ndërmarrësin -  Validation
			var emri_ndermarresit = $('#emri_ndermarresit').val(), 
				 numri_regjistrimit_biznesit = $('#numri_regjistrimit_biznesit').val(), 
				 numri_fiskal = $('#numri_fiskal').val(), 
				 adresa_ndermarresit = $('#adresa_ndermarresit').val(), 
			    num_fax = $('#num_fax').val(),
				 email_ndermarresit = $('#email_ndermarresit').val();

		 	if(!emri_ndermarresit || !numri_regjistrimit_biznesit || !numri_fiskal || !adresa_ndermarresit || !num_fax || !email_ndermarresit){
		 		alert("Ju lutem plotësoni fushat tek pjesa 'Të dhënat për ndërmarrësin'!");
		 		$('.section2').css('display', 'block');
		 		e.preventDefault(e);
		 	}

		// Të dhënat për zyrtarin ligjërisht të përgjegjëshëm - Validation
		 	var emri_zyrtarit = $('#emri_zyrtarit').val(),
		 		 adresa_zyrtarit = $('#adresa_zyrtarit').val(),
		 		 numri_telefonit_zyrtarit = $('#numri_telefonit_zyrtarit').val(),
		 		 num_fax_zyrtarit = $('#num_fax_zyrtarit').val(),
		 		 email_address_zyrtarit = $('#email_address_zyrtarit').val(),
		 	    num_id = $('#num_id').val();

		 	if(!emri_zyrtarit || !adresa_zyrtarit || !numri_telefonit_zyrtarit || !num_fax || !email_address_zyrtarit || !num_id){
		 		alert("Ju lutem plotësoni fushat tek pjesa 'Të dhënat për zyrtarin ligjërisht të përgjegjëshëm'!");
		 		$('.section3').css('display', 'block');
		 		e.preventDefault(e);
		 	}

		// Aktivitetet të cilat njoftohen/cregjistrohen - Validation
			var checkbox1_1 = $('#ofrimi_rrjetit_publik_fiks_lokal').prop("checked"),
			    checkbox1_2 = $('#ofrimi_rrjetit_publik_fiks_nacional').prop("checked"),
			    checkbox2_1 = $('#sherbime_tel_lokale_nacionale').prop("checked"),
			    checkbox2_2 = $('#sherbime_tel_nderkombetare').prop("checked"),
			    checkbox3_1 = $('#ofrimi_rrjetit_publik_mobil_lokal').prop("checked"),
			    checkbox3_2 = $('#ofrimi_rrjetit_publik_mobil_nacional').prop("checked"),
			    checkbox4_1 = $('#sherbime_tel_zerit').prop("checked"),
			    checkbox4_2 = $('#transmetim_dhenash').prop("checked"),
			    checkbox5_1 = $('#fiber_optik_pa_ndriqim').prop("checked"),
			    checkbox5_2 = $('#linja_tjera_qira').prop("checked"),
			    checkbox6_1 = $('#ofrimi_rrjetave_publike_transmetim_satelitor').prop("checked"),
			    checkbox7_1 = $('#ofrimi_sherbimeve_publike_satelitore').prop("checked"),
			    checkbox8_1 = $('#ofrimi_sherbimeve_publike_transmetimit_te_dhenave').prop("checked"),
			    checkbox9_1 = $('#ofrimi_sherbime_me_vlere_te_shtuar').prop("checked");

			if(!checkbox1_1 && !checkbox1_2 && !checkbox2_1 && !checkbox2_2 && !checkbox3_1 && !checkbox3_2 && !checkbox4_1 && !checkbox4_2 && !checkbox5_1 && !checkbox5_2 && !checkbox6_1 && !checkbox7_1 && !checkbox8_1 && !checkbox9_1) {
				alert("Zgjedhni të paktën një lloj tek 'Aktivitetet të cilat njoftohen/cregjistrohen'!");
		 		$('.section4').css('display', 'block');
		 		e.preventDefault(e);
			}

		// Përshkrimi i aktivitetit dhe faza e ofrimit - Validation
			var textarea1 = $('#pershkrimi_aktivetit_faza_ofrimit').val(),
				 textarea2 = $('#faza_ofrimit').val();

			if(!textarea1 || !textarea2) {
				alert("Ju lutem plotësoni fushat tek pjesa 'Përshkrimi i aktivitetit dhe faza e ofrimit'!");
		 		$('.section5').css('display', 'block');
		 		e.preventDefault(e);
			} 

		// Dokumentet e bashkangjitura - Validation
			var doc1 = $('#certifikata_regjistrimit_biznesit').val(),
				doc2 = $('#kopje_certifikates_numrit_fiskal').val(),
				doc3 = $('#kopje_dokumentit_informate_mbi_biznesin').val();

			if(!doc1 || !doc2 || !doc3) {
				alert("Ju lutem bashkangjitni dokumentet tek pjesa 'Dokumentet e bashkangjitura'!");
		 		$('.section6').css('display', 'block');
		 		e.preventDefault(e);
			}

		// Konfirmimi i njoftimit - Validation
			var radio1 = $('#konfirmimi_njoftimit_po').prop("checked"),
				radio2 = $('#konfirmimi_njoftimit_jo').prop("checked");

			if(!radio1 && !radio2) {
				alert("Ju lutem konfirmojeni njoftimin!");
		 		$('.section7').css('display', 'block');
		 		e.preventDefault(e);
			}

		// Detyrimet ligjore - Validation
			var law1 = $('#detyrimi_ligjor_1').prop("checked"),
				law2 = $('#detyrimi_ligjor_2').prop("checked"),
				law3 = $('#detyrimi_ligjor_3').prop("checked"),
				law4 = $('#detyrimi_ligjor_4').prop("checked"),
				law5 = $('#detyrimi_ligjor_5').prop("checked"),
				oldName = $('#emri_i_vjeter').val();

			if(!law1) {
				alert("Ju lutem plotësoni detyrimet ligjore!");
		 		$('.section8').css('display', 'block');
		 		e.preventDefault(e);
			} else if(!law2){
				alert("Ju lutem plotësoni detyrimet ligjore!");
		 		$('.section8').css('display', 'block');
		 		e.preventDefault(e);
			} else if(!law3){
				alert("Ju lutem plotësoni detyrimet ligjore!");
		 		$('.section8').css('display', 'block');
		 		e.preventDefault(e);
			} else if(!law4){
				alert("Ju lutem plotësoni detyrimet ligjore!");
		 		$('.section8').css('display', 'block');
		 		e.preventDefault(e);
			} else if(!law5){
				alert("Ju lutem plotësoni detyrimet ligjore!");
		 		$('.section8').css('display', 'block');
		 		e.preventDefault(e);
			} else if(!oldName.length){
				alert("Ju lutem shënoni emrin e vjetër tek detyrimet ligjore!");
		 		$('.section8').css('display', 'block');
		 		e.preventDefault(e);
			}

		// Last inputs - Validation
			var place = $("#vendi").val(),
				date  = $("#data_e_njoftimit").val(),
				signature = $("#nenshkrimi").val();

			if(!date){
				alert("Ju lutem plotësoni datën e njoftimit!!");
				e.preventDefault(e);
			} else if(!place) {
				alert("Ju lutem shënoni vendin!");
				e.preventDefault(e);
			} else if(signature === '') {
				alert("Ju lutem shënoni nenshkrimi!");
				e.preventDefault(e);
			} else {
				alert("Formulari u dërgua me sukses!");
			}
	});

 	$('#theForm').validate({
 		errorElement: 'div',
 		rules: {
 			emri_ndermarresit: {
 				required: true,
 				minlength: 5
 			},
 			numri_regjistrimit_biznesit: {
 				required: true,
 				number: true,
 				minlength: 7
 			},
 			numri_fiskal: {
 				required: true,
 				number: true,
 				minlength: 9
 			},
 			numri_tel: {
 				required: true,
 				number: true,
 				minlength: 9
 			},
 			adresa_ndermarresit: {
 				required: true,
 				minlength: 10,
 				maxlength: 25
 			},
 			num_fax: {
 				required: true,
 				number: true,
 				minlength: 9
 			},
 			email_ndermarresit: {
 				required: true,
 				email: true
 			},
 			emri_zyrtarit: {
 				required: true
 			},
 			adresa_zyrtarit: {
 				required: true
 			},
 			numri_telefonit_zyrtarit: {
 				required: true,
 				number: true,
 				minlength: 9
 			},
 			num_fax_zyrtarit: {
 				required: true,
 				number: true,
 				minlength: 9
 			},
 			email_address_zyrtarit: {
 				required: true,
 				email: true
 			},
 			num_id: {
 				required: true,
 				number: true,
 				maxlength: 23
 			},
 			pershkrimi_aktivetit_faza_ofrimit: {
 				required: true,
 				minlength: 50,
 				maxlength: 250
 			},
 			faza_ofrimit: {
 				required: true,
 				minlength: 20,
 				maxlength: 100	
 			}

 		},

 		messages: {
 			emri_ndermarresit: {
 				required: "Duhet plotësuar!",
 				minlength: "Shëno më shumë se 5 shkronja!"
 			},
 			numri_regjistrimit_biznesit: {
 				required: "Duhet plotësuar!",
 				number: "Shëno vetëm numra të lutem!",
 				minlength: "Shëno deri në 7 numra!"
 			},
 			numri_fiskal: {
 				required: "Duhet plotësuar!",
 				number: "Shëno vetëm numra të lutem!",
 				minlength: "Shëno deri në 9 numra!"
 			},
 			numri_tel: {
 				required: "Duhet plotësuar!",
 				number: "Shëno vetëm numra të lutem!",
 				minlength: "Shëno deri në 9 numra!"
 			},
 			adresa_ndermarresit: {
 				required: "Duhet plotësuar!",
 				minlength: "Së paku se 10 karaktere!",
 				maxlength: "Jo më shumë se 25 karaktere!"
 			},
 			num_fax: {
 				required: "Duhet plotësuar!",
 				number: "Shëno vetëm numra të lutem!",
 				minlength: "Shëno deri në 9 numra!"
 			},
 			email_ndermarresit: {
 				required: "Duhet plotësuar!",
 				email: "Ju lutem shënoni email të saktë!"
 			},
 			emri_zyrtarit: {
 				required: "Duhet plotësuar"
 			},
 			adresa_zyrtarit: {
 				required: "Duhet plotësuar!",
 				maxlength: "Jo më shumë se 25 karaktere!"
 			},
 			numri_telefonit_zyrtarit: {
 				required: "Duhet plotësuar!",
 				number: "Shëno vetëm numra të lutem!",
 				minlength: "Shëno deri në 9 numra!"
 			},
 			num_fax_zyrtarit: {
 				required: "Duhet plotësuar",
 				number: "Shëno vetëm numra të lutem!",
 				minlength: "Shëno deri në 9 numra!"
 			},
 			email_address_zyrtarit: {
 				required: "Duhet plotësuar!",
 				email: "Ju lutem shënoni email të saktë!"
 			},
 			num_id: {
 				required: "Duhet plotësuar!",
 				number: "Shëno vetëm numra të lutem!",
 				maxlength: "Jo më shumë se 23 karaktere!"
 			},
 			pershkrimi_aktivetit_faza_ofrimit: {
 				required: "Duhet plotësuar!",
 				minlength: "Shëno së paku 50 karaktere, të lutem!",
 				maxlength: "Jo më shumë se 250 karaktere!",
 			},
 			faza_ofrimit: {
 				required: "Duhet plotësuar!",
 				minlength: "Shëno së paku 20 karaktere, të lutem!",
 				maxlength: "Jo më shumë se 100 karaktere!"
 			},
 			dokumentet_bashkangjitura: {
 				required: "Duhet plotësuar!",
 				accept: "Vetem pdf dhe text files!"
 			}
 		},
 	});

});