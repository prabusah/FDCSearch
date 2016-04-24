
$(document).ready(function(){
	var selectedIng = '';
	var mins = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('Name'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: drug
	});
	var jsonData = null;
	mins.initialize();
	$('.typeahead').typeahead(
	    null, {
	    name: 'mins',
	    displayKey: 'Name',
	    source: mins.ttAdapter(),
	    limit: 10
	}).on('typeahead:selected', function(event, data){
		selectedIng = data.Name;
	});

	$("#addlist").click(function(event) {
		event.preventDefault();
		if(selectedIng === '') return;
		
		if($("#dlist").val() !== '')
			$("#dlist").append(", ");
		
		$("#dlist").append(selectedIng);
		$('.typeahead').typeahead('val','');
		selectedIng = '';
	});

	$("#verify").click(function(event) {
		var isFound = false;
		event.preventDefault();
		if($("#dlist").val() === '') return;
		var lhsArr = $("#dlist").val().split(',');

		for(var i=0; i<combinations.length; i++){
			var rhsArr = combinations[i].Name.split(',');
			if(lhsArr.length === rhsArr.length){
				if(_.isEqual(lhsArr, rhsArr)) {
					isFound = true;
					break;
				}
			}	
		}
		if(isFound === true){
			$(".found").css('display','block');
			$(".notfound").css('display','none');
		}else{
			$(".notfound").css('display','block');
			$(".found").css('display','none');
		}
	});
	$("#clear").click(function(event) {
		event.preventDefault();
		$("#dlist").empty();
		$(".found").css('display','none');
		$(".notfound").css('display','none');
	});	
});

var drug = [
{"Name":  "Aceclofenac"},
{"Name":  "Paracetamol"},
{"Name":  "Rabeprazole"},
{"Name":  "Nimesulide"},
{"Name":  "Diclofenac"},
{"Name":  "Cetirizine"},
{"Name":  "Caffeine"},
{"Name":  "Tizanidine"},
{"Name":  "Tramadol"},
{"Name":  "Chlorzoxazone"},
{"Name":  "Dicyclomine"},
{"Name":  "Domperidone"},
{"Name":  "Paracetamol dispersible tablets"},
{"Name":  "Phenylephrine"},
{"Name":  "Famotidine"},
{"Name":  "Naproxen"},
{"Name":  "Serratiopeptidase"},
{"Name":  "Pitofenone"},
{"Name":  "Fenpiverinium"},
{"Name":  "Benzyl Alcohol"},
{"Name":  "Omeprazole"},
{"Name":  "Paracetamol injection"},
{"Name":  "Tamsulosin"},
{"Name":  "Chlorpheniramine"},
{"Name":  "Dextromethorphan"},
{"Name":  "Zinc Carnosine"},
{"Name":  "Chlorpheniramine Maleate"},
{"Name":  "Magnesium Trisillicate"},
{"Name":  "Pseudoephedrine"},
{"Name":  "Cetrizine"},
{"Name":  "Phenylbutazone"},
{"Name":  "Sodium Salicylate"},
{"Name":  "Lornoxicam"},
{"Name":  "Trypsin"},
{"Name":  "Mefenamic Acid"},
{"Name":  "Ranitidine"},
{"Name":  "Heparin"},
{"Name":  "Glucosamine"},
{"Name":  "Methyl Sulfonyl Methane"},
{"Name":  "Vitamin D3"},
{"Name":  "Manganese"},
{"Name":  "Boron"},
{"Name":  "Copper"},
{"Name":  "Zinc"},
{"Name":  "Tapentadol"},
{"Name":  "Tranexamic Acid"},
{"Name":  "Proanthocyanidin"},
{"Name":  "Benzoxonium Chloride"},
{"Name":  "Lidocaine"},
{"Name":  "Magnesium Trisilicate"},
{"Name":  "Ammonium Chloride"},
{"Name":  "Sodium Citrate"},
{"Name":  "Menthol"},
{"Name":  "Prochlorperazine Maleate"},
{"Name":  "Combikit of 3 tablets of Serratiopeptidase (enteric coated 20000 units)"},
{"Name":  "Diclofenac Potassium & 2 tablets of Doxycycline"},
{"Name":  "Paracetamol Suspension"},
{"Name":  "Disodium Hydrogen Citrate"},
{"Name":  "DL Methionine"},
{"Name":  "Codeine"},
{"Name":  "Aceclofenac (SR)"},
{"Name":  "Azithromycin"},
{"Name":  "Cefixime"},
{"Name":  "Amoxicillin"},
{"Name":  "Dicloxacillin"},
{"Name":  "Amoxicillin 250 mg"},
{"Name":  "Potassium Clavulanate Diluted 62.5 mg"},
{"Name":  "Levofloxacin"},
{"Name":  "Linezolid"},
{"Name":  "Potassium Clavulanic Acid"},
{"Name":  "Ofloxacin"},
{"Name":  "Nitazoxanide"},
{"Name":  "Cefpodoxime Proxetil"},
{"Name":  "Combikit of Azithromycin, Secnidazole and Fluconazole"},
{"Name":  "Ornidazole"},
{"Name":  "Alpha Tocopherol Acetate"},
{"Name":  "Nimorazole"},
{"Name":  "Amoxycillin"},
{"Name":  "Tinidazole"},
{"Name":  "Metronidazole"},
{"Name":  "Zinc Acetate"},
{"Name":  "Diphenoxylate"},
{"Name":  "Atropine"},
{"Name":  "Furazolidone"},
{"Name":  "Combikit of Fluconazole Tablet, Azithromycin Tablet and Ornidazole Tablets"},
{"Name":  "Ciprofloxacin"},
{"Name":  "Phenazopyridine"},
{"Name":  "Cefpodoxime"},
{"Name":  "Lignocaine"},
{"Name":  "Clotrimazole"},
{"Name":  "Beclomethasone"},
{"Name":  "Cefuroxime"},
{"Name":  "Zinc Bisglycinate"},
{"Name":  "Norfloxacin"},
{"Name":  "Bromhexine"},
{"Name":  "Fluticasone"},
{"Name":  "Neomycin"},
{"Name":  "Tetracycline"},
{"Name":  "Cephalexin"},
{"Name":  "Prednisolone"},
{"Name":  "Ambroxol"},
{"Name":  "Cilnidipine"},
{"Name":  "Metoprolol Succinate"},
{"Name":  "Metoprolol Tartrate"},
{"Name":  "L-Arginine"},
{"Name":  "Sildenafil"},
{"Name":  "Atorvastatin"},
{"Name":  "Folic Acid"},
{"Name":  "Vitamin B12"},
{"Name":  "Pyridoxine"},
{"Name":  "Metformin"},
{"Name":  "Clindamycin"},
{"Name":  "Telmisartan"},
{"Name":  "Olmesartan"},
{"Name":  "Hydrochlorothiazide"},
{"Name":  "Chlorthalidone"},
{"Name":  "L-5-Methyltetrahydrofolate Calcium"},
{"Name":  "Escitalopram i"},
{"Name":  "Pholcodine"},
{"Name":  "Promethazine"},
{"Name":  "Betahistine"},
{"Name":  "Ginkgo Biloba Extract"},
{"Name":  "Vinpocetine"},
{"Name":  "Piracetam"},
{"Name":  "Diethyl Carbamazine"},
{"Name":  "Doxylamine"},
{"Name":  "Drotaverine"},
{"Name":  "Clidinium"},
{"Name":  "Chlordiazepoxide"},
{"Name":  "Imipramine"},
{"Name":  "Diazepam"},
{"Name":  "Flupentixol"},
{"Name":  "Escitalopram"},
{"Name":  "Prochloperazine"},
{"Name":  "Gabapentin"},
{"Name":  "Mecobalamin"},
{"Name":  "Thiamine"},
{"Name":  "Trifluoperazine"},
{"Name":  "Trihexyphenidyl"},
{"Name":  "Chlorpromazine"},
{"Name":  "Ursodeoxycholic Acid"},
{"Name":  "Silymarin"},
{"Name":  "Metformin 1000/1000/500/500mg"},
{"Name":  "Pioglitazone 7.5/7.5/7.5/7.5mg"},
{"Name":  "Glimepiride 1/2/1/2mg"},
{"Name":  "Gliclazide 80 mg"},
{"Name":  "Metformin 325 mg"},
{"Name":  "Voglibose"},
{"Name":  "Chromium Picolinate"},
{"Name":  "Pioglitazone 7.5/7.5mg"},
{"Name":  "Metformin 500/1000mg"},
{"Name":  "Glimepiride 1mg/2mg/3mg"},
{"Name":  "Pioglitazone 15mg/15mg/15mg"},
{"Name":  "Metformin 1000mg/1000mg/1000mg"},
{"Name":  "Glimepiride 1mg/2mg"},
{"Name":  "Pioglitazone 15mg/15mg"},
{"Name":  "Metformin 850mg/850mg"},
{"Name":  "Metformin 850mg"},
{"Name":  "Pioglitazone 7.5 mg"},
{"Name":  "Glimepiride 2mg"},
{"Name":  "Glimepiride 1mg"},
{"Name":  "Metformin 500mg/500mg"},
{"Name":  "Gliclazide SR 30mg/60mg"},
{"Name":  "Pioglitazone 7.5mg/7.5mg"},
{"Name":  "Pioglitazone"},
{"Name":  "Bromocriptine"},
{"Name":  "Methylcobalamin"},
{"Name":  "Pioglitazone 30 mg"},
{"Name":  "Metformin 500 mg"},
{"Name":  "Glipizide 2.5mg"},
{"Name":  "Metformin 400 mg"},
{"Name":  "Pioglitazone 15mg"},
{"Name":  "Metformin 850 mg"},
{"Name":  "Metformin ER"},
{"Name":  "Gliclazide MR"},
{"Name":  "Chromium Polynicotinate"},
{"Name":  "Gliclazide"},
{"Name":  "Piogllitazone"},
{"Name":  "Glibenclamide"},
{"Name":  "Metformin (SR)"},
{"Name":  "Metformin (Sustainded Release) 500mg"},
{"Name":  "Pioglitazone 15 mg"},
{"Name":  "Glimepiride 3mg"},
{"Name":  "Metformin (SR) 500mg"},
{"Name":  "Pioglitazone 5mg"},
{"Name":  "Chloramphenicol"},
{"Name":  "Clomitrimazole"},
{"Name":  "Ofloxaxin"},
{"Name":  "Glycerine and Propylene Glycol"},
{"Name":  "Chloramphennicol"},
{"Name":  "Betamethasone"},
{"Name":  "Antipyrine"},
{"Name":  "Gentamicin Sulphate"},
{"Name":  "Becloemthasone"},
{"Name":  "Gentamycin"},
{"Name":  "Lignocaine Ear drops"},
{"Name":  "Flunarizine"},
{"Name":  "Paracetamole"},
{"Name":  "Magaldrate"},
{"Name":  "Simethicone"},
{"Name":  "Cyproheptadine"},
{"Name":  "Pancreatin"},
{"Name":  "Papain"},
{"Name":  "Fungul Diastase"},
{"Name":  "Oxytacaine"},
{"Name":  "Alginic Acid"},
{"Name":  "Sodium Bicarbonate"},
{"Name":  "Dried Aluminium Hydroxide"},
{"Name":  "Magnesium Hydroxide"},
{"Name":  "Activated Dimethicone"},
{"Name":  "Loperamide"},
{"Name":  "Oxetacaine"},
{"Name":  "Pantoprazole (as Enteric Coated Tablet)"},
{"Name":  "Zinc Carnosine (as Film Coated Tablets)"},
{"Name":  "Sucralfate"},
{"Name":  "Mebeverine & Inner HPMC capsule (Streptococcus Faecalis"},
{"Name":  "Clostridium butyricum"},
{"Name":  "Bacillus mesentricus"},
{"Name":  "Lactic Acid Bacillus"},
{"Name":  "Estradiol Valerate"},
{"Name":  "Clomifene Citrate"},
{"Name":  "Ubidecarenone"},
{"Name":  "Lycopene"},
{"Name":  "Selenium"},
{"Name":  "Levocarnitine Tartrate"},
{"Name":  "Thyroxine"},
{"Name":  "Dexamethasone"},
{"Name":  "Tobramycin"},
{"Name":  "Levocetirizine"},
{"Name":  "Loratadine"},
{"Name":  "Chlorepheniramine Maleate"},
{"Name":  "Guaiphenesin"},
{"Name":  "Acebrophylline"},
{"Name":  "Diphenhydramine"},
{"Name":  "Terpine"},
{"Name":  "Sodium Chloride"},
{"Name":  "Dextromethophan"},
{"Name":  "Pseudoepheridine"},
{"Name":  "Guaiphenesin "},
{"Name":  "Zinc Gluconate"},
{"Name":  "Dextromethorphen"},
{"Name":  "Triprolidine"},
{"Name":  "Terpinhydrate"},
{"Name":  "Menthol Syrup"},
{"Name":  "Enrofloxacin"},
{"Name":  "Bromhexin"},
{"Name":  "Diethylcabamazine Citrate"},
{"Name":  "Terbutaline"},
{"Name":  "Tripolidine"},
{"Name":  "Phenylephirine"},
{"Name":  "Guaifenesin"},
{"Name":  "Roxithromycin"},
{"Name":  "Acetaminophen"},
{"Name":  "Phenyephrine"},
{"Name":  "Chlopheniramine Maleate"},
{"Name":  "Codeine Syrup"},
{"Name":  "Desloratadine"},
{"Name":  "Montelukast"},
{"Name":  "Acrivastine"},
{"Name":  "Naphazoline"},
{"Name":  "Carboxy Methyl Cellulose"},
{"Name":  "Camphor"},
{"Name":  "Alcohol Syrup"},
{"Name":  "Ammomium Chloride"},
{"Name":  "Diethylcarbamazine"},
{"Name":  "Ethylmorphine"},
{"Name":  "Noscapine"},
{"Name":  "Chlorphaniramine"},
{"Name":  "Salbutamol"},
{"Name":  "Ketotifen"},
{"Name":  "Etofylline"},
{"Name":  "Theophylline"},
{"Name":  "Cetririzine"},
{"Name":  "Zink Gluconate"},
{"Name":  "Tulsi"},
{"Name":  "Levocetrizine"},
{"Name":  "Terpin"},
{"Name":  "Antimony Potassium Tartrate"},
{"Name":  "Certirizine"},
{"Name":  "N-Acetyl Cysteine"},
{"Name":  "Levocertirizine"},
{"Name":  "Zinc Sulphate"},
{"Name":  "Boric Acid"},
{"Name":  "Chlorobutol"},
{"Name":  "Chloroform"},
{"Name":  "Choline Theophylinate"},
{"Name":  "Codeine Phosphate"},
{"Name":  "Choline Theophyllinate"},
{"Name":  "Vasaka"},
{"Name":  "Tolubalsm"},
{"Name":  "Phenylephrine IP"},
{"Name":  "N-Acetyl L-Cysteine"},
{"Name":  "Calcium Gluconate"},
{"Name":  "Carbocisteine"},
{"Name":  "Vitamin C"},
{"Name":  "Serratiopeptidase (as enteric coated granules) 10000 SP Units"},
{"Name":  "Pheniramine"},
{"Name":  "Fusidic Acid"},
{"Name":  "Tolnaftate"},
{"Name":  "lodochlorhydroxyquinoline (ICHQ)"},
{"Name":  "Clobetasol"},
{"Name":  "Miconazole"},
{"Name":  "Clobetasole"},
{"Name":  "Gentamicin"},
{"Name":  "Permethrin"},
{"Name":  "Cetrimide"},
{"Name":  "Clotimazole"},
{"Name":  "lodochlorohydroxyquinone"},
{"Name":  "Fluocinolone"},
{"Name":  "Chlorocresol"},
{"Name":  "Ketoconazol"},
{"Name":  "lodochlorhydroxyquinone"},
{"Name":  "Ketoconazole"},
{"Name":  "Allantoin"},
{"Name":  "Dimethieone"},
{"Name":  "Urea"},
{"Name":  "Propylene"},
{"Name":  "Glycerin"},
{"Name":  "Liquid Paraffin"},
{"Name":  "Acriflavine"},
{"Name":  "Thymol"},
{"Name":  "lodochlorohydroxyquinoline"},
{"Name":  "Cholorocresol"},
{"Name":  "Tea Tree oil"},
{"Name":  "Allantion"},
{"Name":  "Zinc Oxide"},
{"Name":  "Aloe Vera"},
{"Name":  "Jojoba oil"},
{"Name":  "Lavander oil"},
{"Name":  "Soa noodels"},
{"Name":  "Clobetasol Propionate"},
{"Name":  "Terbinafine"},
{"Name":  "Beclomethasone Diproprionate"},
{"Name":  "Clotrimoazole"},
{"Name":  "Borax"},
{"Name":  "Methyl Hydroxy Benzoate"},
{"Name":  "Chlopheniramine"},
{"Name":  "Anesthetic Ether"},
{"Name":  "Dextrometharphan"},
{"Name":  "Ammonium"},
{"Name":  "Ergotamine Tartrate"},
{"Name":  "Belladona Dry Extract"},
{"Name":  "Phenytoin"},
{"Name":  "Phenobarbitone"},
{"Name":  "Gliclazide 40mg"},
{"Name":  "Metformin 400mg"},
{"Name":  "Oflaxacin"},
{"Name":  "Ornidazole Suspension"},
{"Name":  "Albuterol"},
{"Name":  "Hydroxyethyltheophylline (Etofylline)"},
{"Name":  "Propyphenazone"},
{"Name":  "Dried Alumnium Hydroxie Gel"},
{"Name":  "Prophantheline"},
{"Name":  "Bromhenxine"},
{"Name":  "Ammonium Citrate"},
{"Name":  "Vitamin B 12"},
{"Name":  "Levothyroxine"},
{"Name":  "Phyridoxine"},
{"Name":  "Nicotinamide"},
{"Name":  "Benfotiamine"},
{"Name":  "Thyroid"},
{"Name":  "Riboflavin"},
{"Name":  "Calcium Pantothenate"},
{"Name":  "Tocopheryl Acetate"},
{"Name":  "Ascorbic Acid"},
{"Name":  "Manadione Sodium Bisulphate"},
{"Name":  "Rutin"},
{"Name":  "Dibasic Calcium Phosphate"},
{"Name":  "Adrenochrome mono Semicarbazone"},
{"Name":  "Acetic Aicd"},
{"Name":  "Sodium Methyl Paraben"},
{"Name":  "Propyl Paraben"}
];

var combinations = [
{"Name":  "Aceclofenac, Paracetamol, Rabeprazole"},
{"Name":  "Nimesulide, Diclofenac"},
{"Name":  "Nimesulide, Cetirizine, Caffeine"},
{"Name":  "Nimesulide, Tizanidine"},
{"Name":  "Paracetamol, Cetirizine, Caffeine"},
{"Name":  "Diclofenac, Tramadol, Chlorzoxazone"},
{"Name":  "Dicyclomine, Paracetamol, Domperidone"},
{"Name":  "Nimesulide, Paracetamol dispersible tablets"},
{"Name":  "Paracetamol, Phenylephrine, Caffeine"},
{"Name":  "Diclofenac, Tramadol, Paracetamol"},
{"Name":  "Diclofenac, Paracetamol, Chlorzoxazone, Famotidine"},
{"Name":  "Naproxen, Paracetamol"},
{"Name":  "Nimesulide, Serratiopeptidase"},
{"Name":  "Paracetamol, Diclofenac, Famotidine"},
{"Name":  "Nimesulide, Pitofenone, Fenpiverinium, Benzyl Alcohol"},
{"Name":  "Omeprazole, Paracetamol, Diclofenac"},
{"Name":  "Nimesulide, Paracetamol injection"},
{"Name":  "Tamsulosin, Diclofenac"},
{"Name":  "Paracetamol, Phenylephrine, Chlorpheniramine, Dextromethorphan, Caffeine"},
{"Name":  "Diclofenac, Zinc Carnosine"},
{"Name":  "Diclofenac, Paracetamol, Chlorpheniramine Maleate, Magnesium Trisillicate"},
{"Name":  "Paracetamol, Pseudoephedrine, Cetrizine"},
{"Name":  "Phenylbutazone, Sodium Salicylate"},
{"Name":  "Lornoxicam, Paracetamol, Trypsin"},
{"Name":  "Paracetamol, Mefenamic Acid, Ranitidine, Dicyclomine"},
{"Name":  "Nimesulide, Dicyclomine"},
{"Name":  "Heparin, Diclofenac"},
{"Name":  "Glucosamine, Methyl Sulfonyl Methane, Vitamin D3, Manganese, Boron, Copper, Zinc"},
{"Name":  "Paracetamol, Tapentadol"},
{"Name":  "Tranexamic Acid, Proanthocyanidin"},
{"Name":  "Benzoxonium Chloride, Lidocaine"},
{"Name":  "Lornoxicam, Paracetamol, Tramadol"},
{"Name":  "Lornoxicam, Paracetamol, Serratiopeptidase"},
{"Name":  "Diclofenac, Paracetamol, Magnesium Trisilicate"},
{"Name":  "Paracetamol, Domperidone, Caffeine"},
{"Name":  "Ammonium Chloride, Sodium Citrate, Chlorpheniramine Maleate, Menthol"},
{"Name":  "Paracetamol, Prochlorperazine Maleate"},
{"Name":  "Combikit of 3 tablets of Serratiopeptidase (enteric coated 20000 units), Diclofenac Potassium & 2 tablets of Doxycycline"},
{"Name":  "Nimesulide, Paracetamol Suspension"},
{"Name":  "Aceclofenac, Paracetamol, Famotidine"},
{"Name":  "Aceclofenac, Zinc Carnosine"},
{"Name":  "Paracetamol, Disodium Hydrogen Citrate, Caffeine"},
{"Name":  "Paracetamol, DL Methionine"},
{"Name":  "Disodium Hydrogen Citrate, Paracetamol"},
{"Name":  "Paracetamol, Caffeine, Codeine"},
{"Name":  "Aceclofenac (SR), Paracetamol"},
{"Name":  "Diclofenac, Paracetamol injection"},
{"Name":  "Azithromycin, Cefixime"},
{"Name":  "Amoxicillin, Dicloxacillin"},
{"Name":  "Amoxicillin 250 mg, Potassium Clavulanate Diluted 62.5 mg"},
{"Name":  "Azithromycin, Levofloxacin"},
{"Name":  "Cefixime, Linezolid"},
{"Name":  "Amoxicillin, Cefixime, Potassium Clavulanic Acid"},
{"Name":  "Ofloxacin, Nitazoxanide"},
{"Name":  "Cefpodoxime Proxetil, Levofloxacin"},
{"Name":  "Combikit of Azithromycin, Secnidazole and Fluconazole"},
{"Name":  "Levofloxacin, Ornidazole, Alpha Tocopherol Acetate"},
{"Name":  "Nimorazole, Ofloxacin"},
{"Name":  "Azithromycin, Ofloxacin"},
{"Name":  "Amoxycillin, Tinidazole"},
{"Name":  "Doxycycline, Serratiopeptidase"},
{"Name":  "Cefixime, Levofloxacin"},
{"Name":  "Ofloxacin, Metronidazole, Zinc Acetate"},
{"Name":  "Diphenoxylate, Atropine, Furazolidone"},
{"Name":  "Combikit of Fluconazole Tablet, Azithromycin Tablet and Ornidazole Tablets"},
{"Name":  "Ciprofloxacin, Phenazopyridine"},
{"Name":  "Amoxycillin, Dicloxacillin, Serratiopeptidase"},
{"Name":  "Combikit of Fluconazole Tablet, Azithromycin Tablet and Ornidazole Tablets"},
{"Name":  "Ciprofloxacin, Phenazopyridine"},
{"Name":  "Amoxycillin, Dicloxacillin, Serratiopeptidase"},
{"Name":  "Azithromycin, Cefpodoxime"},
{"Name":  "Lignocaine, Clotrimazole, Ofloxacin, Beclomethasone"},
{"Name":  "Cefuroxime, Linezolid"},
{"Name":  "Ofloxacin, Ornidazole, Zinc Bisglycinate"},
{"Name":  "Metronidazole, Norfloxacin"},
{"Name":  "Amoxicillin, Bromhexine"},
{"Name":  "Ciprofloxacin, Fluticasone, Clotrimazole, Neomycin"},
{"Name":  "Metronidazole, Tetracycline"},
{"Name":  "Cephalexin, Neomycin, Prednisolone"},
{"Name":  "Azithromycin, Ambroxol"},
{"Name":  "Cilnidipine, Metoprolol Succinate, Metoprolol Tartrate"},
{"Name":  "L-Arginine, Sildenafil"},
{"Name":  "Atorvastatin, Vitamin D3, Folic Acid, Vitamin B12, Pyridoxine"},
{"Name":  "Metformin, Atorvastatin"},
{"Name":  "Clindamycin, Telmisartan"},
{"Name":  "Olmesartan, Hydrochlorothiazide, Chlorthalidone"},
{"Name":  "L-5-Methyltetrahydrofolate Calcium, Escitalopram i"},
{"Name":  "Pholcodine, Promethazine"},
{"Name":  "Paracetamol, Promethazine"},
{"Name":  "Betahistine, Ginkgo Biloba Extract, Vinpocetine, Piracetam"},
{"Name":  "Cetirizine, Diethyl Carbamazine"},
{"Name":  "Doxylamine, Pyridoxine, Mefenamic Acid, Paracetamol"},
{"Name":  "Drotaverine, Clidinium, Chlordiazepoxide"},
{"Name":  "Imipramine, Diazepam"},
{"Name":  "Flupentixol, Escitalopram"},
{"Name":  "Paracetamol, Prochloperazine"},
{"Name":  "Gabapentin, Mecobalamin, Pyridoxine, Thiamine"},
{"Name":  "Imipramine, Chlordiazepoxide, Trifluoperazine, Trihexyphenidyl"},
{"Name":  "Chlorpromazine, Trihexyphenidyl"},
{"Name":  "Ursodeoxycholic Acid, Silymarin"},
{"Name":  "Metformin 1000/1000/500/500mg, Pioglitazone 7.5/7.5/7.5/7.5mg, Glimepiride 1/2/1/2mg"},
{"Name":  "Gliclazide 80 mg, Metformin 325 mg"},
{"Name":  "Voglibose,  Metformin, Chromium Picolinate"},
{"Name":  "Pioglitazone 7.5/7.5mg, Metformin 500/1000mg"},
{"Name":  "Glimepiride 1mg/2mg/3mg, Pioglitazone 15mg/15mg/15mg, Metformin 1000mg/ 1000mg/1000mg"},
{"Name":  "Glimepiride 1mg/2mg,  Pioglitazone 15mg/15mg, Metformin 850mg/850mg"},
{"Name":  "Metformin 850mg, Pioglitazone 7.5 mg, Glimepiride 2mg"},
{"Name":  "Metformin 850mg, Pioglitazone 7.5 mg, Glimepiride 1mg"},
{"Name":  "Metformin 500mg/500mg, Gliclazide SR 30mg/60mg, Pioglitazone 7.5mg/7.5mg"},
{"Name":  "Voglibose, Pioglitazone, Metformin"},
{"Name":  "Metformin, Bromocriptine"},
{"Name":  "Metformin, Glimepiride, Methylcobalamin"},
{"Name":  "Pioglitazone 30 mg, Metformin 500 mg"},
{"Name":  "Glimepiride, Pioglitazone, Metformin"},
{"Name":  "Glipizide 2.5mg, Metformin 400 mg"},
{"Name":  "Pioglitazone 15mg, Metformin 850 mg"},
{"Name":  "Metformin ER, Gliclazide MR, Voglibose"},
{"Name":  "Chromium Polynicotinate, Metformin"},
{"Name":  "Metformin, Gliclazide, Piogllitazone, Chromium Polynicotinate"},
{"Name":  "Metformin, Gliclazide, Chromium Polynicotinate"},
{"Name":  "Glibenclamide, Metformin (SR),  Pioglitazone"},
{"Name":  "Metformin (Sustainded Release) 500mg, Pioglitazone 15 mg, Glimepiride 3mg"},
{"Name":  "Metformin (SR) 500mg, Pioglitazone 5mg"},
{"Name":  "Chloramphenicol, Beclomethasone, Clomitrimazole, Lignocaine"},
{"Name":  "Clotrimazole, Ofloxaxin, Lignocaine, Glycerine and Propylene Glycol"},
{"Name":  "Chloramphennicol, Lignocaine, Betamethasone, Clotrimazole, Ofloxacin, Antipyrine"},
{"Name":  "Ofloxacin, Clotrimazole, Betamethasone, Lignocaine"},
{"Name":  "Gentamicin Sulphate, Clotrimazole, Betamethasone, Lignocaine"},
{"Name":  "Clotrimazole, Beclomethasone, Ofloxacin, Lignocaine"},
{"Name":  "Becloemthasone, Clotrimazole, Chloramphenicol, Gentamycin, Lignocaine Ear drops"},
{"Name":  "Flunarizine, Paracetamole, Domperidone"},
{"Name":  "Rabeprazole, Zinc Carnosine"},
{"Name":  "Magaldrate, Famotidine, Simethicone"},
{"Name":  "Cyproheptadine, Thiamine"},
{"Name":  "Magaldrate, Ranitidine, Pancreatin, Domperidone"},
{"Name":  "Ranitidine, Magaldrate, Simethicone"},
{"Name":  "Magaldrate, Papain, Fungul Diastase, Simethicone"},
{"Name":  "Rabeprazole, Zinc, Domperidone"},
{"Name":  "Famotidine, Oxytacaine, Magaldrate"},
{"Name":  "Ranitidine, Domperidone, Simethicone"},
{"Name":  "Alginic Acid, Sodium Bicarbonate, Dried Aluminium Hydroxide, Magnesium Hydroxide"},
{"Name":  "Clidinium, Paracetamol, Dicyclomine, Activated Dimethicone"},
{"Name":  "Furazolidone, Metronidazole, Loperamide"},
{"Name":  "Rabeprazole, Diclofenac, Paracetamol"},
{"Name":  "Ranitidine, Magaldrate"},
{"Name":  "Norfloxacin, Metronidazole, Zinc Acetate"},
{"Name":  "Zinc Carnosine, Oxetacaine"},
{"Name":  "Oxetacaine, Magaldrate, Famotidine"},
{"Name":  "Pantoprazole (as Enteric Coated Tablet), Zinc Carnosine (as Film Coated Tablets)"},
{"Name":  "Zinc Carnosine, Magnesium Hydroxide, Dried Aluminium Hydroxide, Simethicone"},
{"Name":  "Zinc Carnosine, Sucralfate"},
{"Name":  "Mebeverine & Inner HPMC capsule (Streptococcus Faecalis, Clostridium butyricum, Bacillus mesentricus, Lactic Acid Bacillus)"},
{"Name":  "Clindamycin, Clotrimazole, Lactic Acid Bacillus"},
{"Name":  "Sildenafil, Estradiol Valerate"},
{"Name":  "Clomifene Citrate, Ubidecarenone, Zinc, Folic Acid, Methylcobalamin, Pyridoxine, Lycopene, Selenium, Levocarnitine Tartrate, L-Arginine"},
{"Name":  "Thyroxine, Pyridoxine, Folic Acid"},
{"Name":  "Gentamycin, Dexamethasone, Chloramphenicol, Tobramycin, Ofloxacin"},
{"Name":  "Dextromethorphan, Levocetirizine, Phenylephrine, Zinc"},
{"Name":  "Nimesulide, Loratadine, Phenylephrine, Ambroxol"},
{"Name":  "Bromhexine, Phenylephrine, Chlorepheniramine Maleate"},
{"Name":  "Dextromethorphan, Bromhexine, Guaiphenesin"},
{"Name":  "Paracetamol, Loratadine, Phenylephrine, Dextromethorphan, Caffeine"},
{"Name":  "Nimesulide, Phenylephrine, Caffeine, Levocetirizine"},
{"Name":  "Azithromycin, Acebrophylline"},
{"Name":  "Diphenhydramine, Terpine, Ammonium Chloride, Sodium Chloride, Menthol"},
{"Name":  "Nimesulide, Paracetamol, Cetirizine, Phenylephrine"},
{"Name":  "Paracetamol, Loratadine, Dextromethophan, Pseudoepheridine, Caffeine"},
{"Name":  "Chlorpheniramine Maleate, Dextromethorphan, Dextromethophan, Guaiphenesin, Ammonium Chloride, Menthol"},
{"Name":  "Chlorpheniramine Maleate, Ammonium Chloride, Sodium Citrate"},
{"Name":  "Cetirizine, Phenylephrine, Paracetamol, Zinc Gluconate"},
{"Name":  "Ambroxol, Guaiphenesin, Ammonium Chloride, Phenylephrine, Chlorpheniramine Maleate, Menthol"},
{"Name":  "Dextromethorphen, Bromhexine, Chlorpheniramine Maleate, Guaiphenesin"},
{"Name":  "Levocetirizine, Ambroxol, Phenylephrine, Guaiphenesin"},
{"Name":  "Dextromethorphan, Chlorpheniramine, Chlorpheniramine Maleate"},
{"Name":  "Cetirizine, Ambroxol, Guaiphenesin, Ammonium Chloride, Phenylephrine, Menthol"},
{"Name":  "Chlorpheniramine, Phenylephrine, Caffeine"},
{"Name":  "Dextromethorphan, Triprolidine, Phenylephrine"},
{"Name":  "Terpinhydrate, Dextromethorphan, Menthol"},
{"Name":  "Dextromethorphan, Phenylephrine, Zinc Gluconate, Menthol"},
{"Name":  "Chlorpheniramine, Codeine, Sodium Citrate, Menthol Syrup"},
{"Name":  "Enrofloxacin, Bromhexin"},
{"Name":  "Bromhexine, Dextromethorphan, Phenylephrine, Menthol"},
{"Name":  "Levofloxacin, Bromhexine"},
{"Name":  "Levocetirizine, Ranitidine"},
{"Name":  "Levocetirizine, Phenylephrine, Ambroxol, Guaiphenesin, Paracetamol"},
{"Name":  "Cetirizine, Dextromethorphan, Phenylephrine, Zinc Gluconate, Paracetamol, Menthol"},
{"Name":  "Paracetamol, Pseudoephedrine, Dextromethorphan, Cetirizine"},
{"Name":  "Diphenhydramine, Guaiphenesin, Ammonium Chloride, Bromhexine"},
{"Name":  "Chlorpheniramine, Dextromethorphan, Phenylephrine, Paracetamol"},
{"Name":  "Dextromethorphen, Promethazine"},
{"Name":  "Diethylcabamazine Citrate, Cetirizine, Guaiphenesin"},
{"Name":  "Pseudoephedrine, Dextromethorphan, Cetirizine"},
{"Name":  "Chlorpheniramine, Phenylephrine, Dextromethophan, Menthol"},
{"Name":  "Ambroxol, Terbutaline, Dextromethorphan"},
{"Name":  "Dextromethorphan, Chlorpheniramine, Guaiphenesin"},
{"Name":  "Terbutaline, Bromhexine, Guaiphenesin, Dextromethorphan"},
{"Name":  "Dextromethorphan, Tripolidine, Phenylephirine"},
{"Name":  "Paracetamol, Dextromethorphan, Chlorpheniramine"},
{"Name":  "Pholcodine, Phenylephrine, Promethazine"},
{"Name":  "Codeine, Levocetirizine, Menthol"},
{"Name":  "Dextromethorphan, Ambroxol, Guaifenesin, Phenylephrine, Chlorpheniramine"},
{"Name":  "Cetirizine, Phenylephrine, Dextromethorphan, Menthol"},
{"Name":  "Roxithromycin, Serratiopeptidase"},
{"Name":  "Paracetamol, Phenylephrine, Triprolidine"},
{"Name":  "Acetaminophen, Loratadine, Ambroxol, Phenylephrine"},
{"Name":  "Cetirizine, Acetaminophen, Dextromethorphan, Phenyephrine, Zinc Gluconate"},
{"Name":  "Diphenhydramine, Guaifenesin, Bromhexine, Ammonium Chloride, Menthol"},
{"Name":  "Chlopheniramine Maleate, Codeine Syrup"},
{"Name":  "Cetirizine, Dextromethorphan, Zinc Gluconate, Menthol"},
{"Name":  "Paracetamol, Phenylephrine, Desloratadine, Zinc Gluconate, Ambroxol"},
{"Name":  "Levocetirizine, Montelukast, Acebrophylline"},
{"Name":  "Dextromethorphan, Phenylephrine, Ammonium Chloride, Menthol"},
{"Name":  "Dextromethorphan, Bromhexine, Guaiphenesin, Menthol"},
{"Name":  "Acrivastine, Paracetamol, Caffeine, Phenylephrine"},
{"Name":  "Naphazoline, Carboxy Methyl Cellulose, Menthol, Camphor, Phenylephrine"},
{"Name":  "Dextromethorphan, Cetirizine"},
{"Name":  "Nimesulide, Paracetamol, Levocetirizine, Phenylephrine, Caffeine"},
{"Name":  "Terbutaline, Ambroxol, Guaiphenesin, Zinc, Menthol"},
{"Name":  "Codeine, Chlorpheniramine, Alcohol Syrup"},
{"Name":  "Dextromethorphan, Phenylephrine, Guaifenesin, Triprolidine"},
{"Name":  "Ammomium Chloride, Bromhexine, Dextromethorphan"},
{"Name":  "Diethylcarbamazine, Cetirizine, Ambroxol"},
{"Name":  "Ethylmorphine, Noscapine, Chlorpheniramine"},
{"Name":  "Cetirizine, Dextromethorphan, Ambroxol"},
{"Name":  "Bromhexine, Dextromethorphan, Ammonium Chloride, Menthol"},
{"Name":  "Ambroxol, Guaifenesin, Phenylephrine, Chlorpheniramine"},
{"Name":  "Paracetamol, Phenylephrine, Chlorpheniramine, Zinc Gluconate"},
{"Name":  "Dextromethorphan, Phenylephrine, Cetirizine, Paracetamol, Caffeine"},
{"Name":  "Dextromethophan, Chlorpheniramine, Guaifenesin, Ammonium Chloride"},
{"Name":  "Levocetirizine, Dextromethorphan, Zinc"},
{"Name":  "Paracetamol, Phenylephrine, Levocetirizine, Caffeine"},
{"Name":  "Chlorphaniramine, Ammonium Chloride, Sodium Chloride"},
{"Name":  "Paracetamol, Dextromethorphan, Bromhexine, Phenylephrine, Diphenhydramine"},
{"Name":  "Salbutamol, Bromhexine, Guaiphenesin, Menthol"},
{"Name":  "Chlorpheniramine, Ammonium Chloride, Noscapine, Sodium Citrate"},
{"Name":  "Cetirizine, Dextromethorphan, Bromhexine, Guaifenesin"},
{"Name":  "Diethyl Carbamazine, Chlorpheniramine, Guaifenesin"},
{"Name":  "Ketotifen, Cetirizine"},
{"Name":  "Terbutaline, Bromhexine, Etofylline"},
{"Name":  "Ketotifen, Theophylline"},
{"Name":  "Ambroxol, Salbutamol, Theophylline"},
{"Name":  "Cetririzine, Nimesulide, Phenylephrine"},
{"Name":  "Chlorpheniramine, Phenylephrine, Paracetamol, Zink Gluconate"},
{"Name":  "Acetaminophen, Guaifenesin, Dextromethorphan, Chlorpheniramine"},
{"Name":  "Cetirizine, Dextromethorphan, Phenylephrine, Tulsi"},
{"Name":  "Cetirizine, Phenylephrine, Paracetamol, Ambroxol, Caffeine"},
{"Name":  "Guaifenesin, Dextromethorphan"},
{"Name":  "Levocetirizine, Paracetamol, Phenylephirine, Caffeine"},
{"Name":  "Caffeine, Paracetamol, Phenylephrine, Chlorpheniramine"},
{"Name":  "Ketotifen, Levocetrizine"},
{"Name":  "Paracetamol, Levocetirizine, Phenylephirine, Zink Gluconate"},
{"Name":  "Paracetamol, Phenylephrine, Triprolidine, Caffeine"},
{"Name":  "Caffeine, Paracetamol, Phenylephrine, Cetirizine"},
{"Name":  "Caffeine, Paracetamol, Chlorpheniramine"},
{"Name":  "Ammonium Chloride, Dextromethorphan, Cetirizine, Menthol"},
{"Name":  "Dextromethorphan, Paracetamol, Cetirizine, Phenylephrine"},
{"Name":  "Chlorpheniramine, Terpin, Antimony Potassium Tartrate, Ammonium Chloride, Sodium Citrate, Menthol"},
{"Name":  "Terbutaline, Etofylline, Ambroxol"},
{"Name":  "Paracetamol, Codeine, Chlorpheniramine"},
{"Name":  "Paracetamol, Pseudoephedrine, Certirizine, Caffeine"},
{"Name":  "Chlorpheniramine, Ammonium Chloride, Menthol"},
{"Name":  "N-Acetyl Cysteine, Ambroxol, Phenylephrine, Levocertirizine"},
{"Name":  "Dextromethorphan, Phenylephrine, Tripolidine, Menthol"},
{"Name":  "Salbutamol, Certirizine, Ambroxol"},
{"Name":  "Dextromethorphan, Phenylephrine, Bromhexine, Guaifenesin, Chlorpheniramine"},
{"Name":  "Nimesulide, Certirizine, Phenylephrine"},
{"Name":  "Naphazoline, Chlorpheniramine, Zinc Sulphate, Boric Acid, Sodium Chloride, Chlorobutol"},
{"Name":  "Paracetamol, Bromhexine, Phenylephrine, Chlorpheniramine, Guaifenesin"},
{"Name":  "Salbutamol, Bromhexine"},
{"Name":  "Dextromethorphan, Phenylephrine, Guaifenesin, Certirizine, Acetaminophen"},
{"Name":  "Guaifenesin, Bromhexine, Chlorpheniramine, Paracetamol"},
{"Name":  "Chlorpheniramine, Ammonium Chloride, Chloroform, Menthol"},
{"Name":  "Salbutamol, Choline Theophylinate, Ambroxol"},
{"Name":  "Chlorpheniramine, Codeine Phosphate, Menthol Syrup"},
{"Name":  "Pseudoephedrine, Bromhexine"},
{"Name":  "Certirizine, Phenylephrine, Paracetamol, Caffeine, Nimesulide"},
{"Name":  "Dextromethorphan, Cetirizine, Guaifenesin, Ammonium Chloride"},
{"Name":  "Ambroxol, Salbutamol, Choline Theophyllinate, Menthol"},
{"Name":  "Paracetamol, Chlorpheniramine, Ambroxol, Guaifenesin, Phenylephrine"},
{"Name":  "Chlorpheniramine, Vasaka, Tolubalsm, Ammonium Chloride, Sodium Citrate, Menthol"},
{"Name":  "Bromhexine, Cetrizine, Phenylephrine IP, Guaifenesin, Menthol"},
{"Name":  "Dextromethorphan, Ambroxol, Ammonium Chloride, Chlorpheniramine, Menthol"},
{"Name":  "Dextromethorphan, Phenylephrine, Cetirizine, Zinc, Menthol"},
{"Name":  "Terbutaline, N-Acetyl L-Cysteine, Guaifenesin"},
{"Name":  "Calcium Gluconate, Levocetirizine"},
{"Name":  "Paracetamol, Levocetirizine, Pseudoephedrine"},
{"Name":  "Salbutamol, Choline Theophylinate, Carbocisteine"},
{"Name":  "Chlorpheniramine, Vitamin C"},
{"Name":  "Calcium Gluconate, Chlorpheniramine, Vitamin C"},
{"Name":  "Chlorpheniramine, Paracetamol, Pseudoephedrine, Caffeine"},
{"Name":  "Guaifenesin, Bromhexine, Chlorpheniramine, Phenylephrine, Paracetamol, Serratiopeptidase (as enteric coated granules) 10000 SP Units"},
{"Name":  "Paracetamol, Pheniramine"},
{"Name":  "Betamethasone, Fusidic Acid, Gentamycin, Tolnaftate, lodochlorhydroxyquinoline (ICHQ)"},
{"Name":  "Clobetasol, Ofloxacin, Miconazole, Zinc Sulphate"},
{"Name":  "Clobetasole, Gentamicin, Miconazole, Zinc Sulphate"},
{"Name":  "Levocetirizine, Ambroxol, Phenylephrine, Paracetamol"},
{"Name":  "Permethrin, Cetrimide, Menthol"},
{"Name":  "Beclomethasone, Clotimazole, Neomycin, lodochlorohydroxyquinone"},
{"Name":  "Neomycin, Doxycycline"},
{"Name":  "Ciprofloxacin, Fluocinolone, Clotrimazole, Neomycin, Chlorocresol"},
{"Name":  "Clobetasol, Ofloxacin, Ketoconazol, Zinc Sulphate"},
{"Name":  "Betamethasone, Gentamicin, Tolnaftate, lodochlorhydroxyquinoline"},
{"Name":  "Clobetasol, Gentamicin, Tolnaftate, lodochlorhydroxyquinone, Ketoconazole"},
{"Name":  "Allantoin, Dimethieone, Urea, Propylene, Glycerin, Liquid Paraffin"},
{"Name":  "Acriflavine, Thymol, Cetrimide"},
{"Name":  "Betamethasone, Neomycin, Tolnaftate, lodochlorohydroxyquinoline, Cholorocresol"},
{"Name":  "Clobetasol, Neomycin, Miconazole, Clotrimazole"},
{"Name":  "Ketoconazole, Tea Tree oil, Allantion, Zinc Oxide, Aloe Vera, Jojoba oil, Lavander oil, Soa noodels"},
{"Name":  "Clobetasol Propionate, Ofloxacin, Ornidazole, Terbinafine"},
{"Name":  "Clobetasol, Neomycin, Miconazole, Zinc Sulphate"},
{"Name":  "Beclomethasone Diproprionate, Neomycin, Tolnaftate, lodochlorhydroxyquinoline, Chlorocresol"},
{"Name":  "Betamethasone, Gentamycin, Zinc Sulphate, Clotrimoazole, Chlorocresol"},
{"Name":  "Borax, Boric Acid, Naphazoline, Menthol, Camphor, Methyl Hydroxy Benzoate"},
{"Name":  "Bromhexine, Dextromethorphan"},
{"Name":  "Dextromethophan, Chlopheniramine, Bromhexine"},
{"Name":  "Menthol, Anesthetic Ether"},
{"Name":  "Dextrometharphan, Chlopheniramine, Ammonium, Sodium Citrate, Menthol"},
{"Name":  "Ergotamine Tartrate, Belladona Dry Extract, Caffeine, Paracetamol"},
{"Name":  "Phenytoin, Phenobarbitone"},
{"Name":  "Gliclazide 40mg, Metformin 400mg"},
{"Name":  "Paracetamol, Ambroxol, Phenylephrine, Chlorpheniramine"},
{"Name":  "Oflaxacin, Ornidazole Suspension"},
{"Name":  "Albuterol, Etofylline, Bromhexine, Menthol"},
{"Name":  "Albuterol, Bromhexine, Theophylline"},
{"Name":  "Salbutamol, Hydroxyethyltheophylline (Etofylline), Bromhexine"},
{"Name":  "Paracetamol, Phenylephrine, Levocetirizine, Sodium Citrate"},
{"Name":  "Paracetamol, Propyphenazone, Caffeine"},
{"Name":  "Guaifenesin, Diphenhydramine, Bromhexine, Phenylephrine"},
{"Name":  "Dried Alumnium Hydroxie Gel, Prophantheline, Diazepam"},
{"Name":  "Bromhenxine, Phenylephrine, Chlorpheniramine, Paracetamol"},
{"Name":  "Beclomethasone, Clotrimazole, Gentamicin, lodochlorhydroxyquinoline"},
{"Name":  "Telmisartan, Metformin"},
{"Name":  "Ammonium Citrate, Vitamin B 12, Folic Acid, Zinc Sulphate"},
{"Name":  "Levothyroxine, Phyridoxine, Nicotinamide"},
{"Name":  "Benfotiamine, Metformin"},
{"Name":  "Thyroid, Thiamine, Riboflavin, Phyridoxine, Calcium Pantothenate, Tocopheryl Acetate, Nicotinamide"},
{"Name":  "Ascorbic Acid, Manadione Sodium Bisulphate, Rutin, Dibasic Calcium Phosphate, Adrenochrome mono Semicarbazone"},
{"Name":  "Phenylephrine, Chlorpheniramine, Paracetamol, Bromhexine, Caffeine"},
{"Name":  "Clotrimazole, Beclomethasone, Lignocaine, Ofloxacin, Acetic Aicd, Sodium Methyl Paraben, Propyl Paraben"}
];