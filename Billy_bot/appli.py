#!/usr/bin/env python
#coding: utf-8

from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
import logging
import sys
sys.path.insert(0, '../lib/')
import fonctions_bot

while True:

	fonctions_bot.menu()
	user_input = raw_input("\nChoisir une option : ")

	if user_input == '1':
		
		f = open("database.json", "w")
		f.write("")
		f.close

		chatterbot = ChatBot('Billy',
			    storage_adapter='chatterbot.storage.JsonFileStorageAdapter',
			    database='./database.json', #nom de la base de données
			    silence_performance_warning=True, #n'affiche pas le message d'erreu
			    input_adapter='chatterbot.input.TerminalAdapter',
			    output_adapter='chatterbot.output.TerminalAdapter',
			    logic_adapters=[
			    {
			    	"import_path": "chatterbot.logic.BestMatch",
			        "statement_comparison_function": "chatterbot.comparisons.levenshtein_distance", #algo de levensthein utilisé
			        "response_selection_method": "chatterbot.response_selection.get_first_response" #si deux réponses sont choisies, on prend la premiere
			    }
			  ]
			)

		chatterbot.set_trainer(ChatterBotCorpusTrainer)
		chatterbot.train("./trivia.json") #corpus qui sert de base de connaissance au bot
		print("\n\nBonjour, je suis Billy, votre assistant. Posez moi une question !")
		print("Si vous souhaitez retourner au menu faites Ctrl+C\n")

		while True:
			    try:
			     chatterbot_input = chatterbot.get_response(None)

			    except(KeyboardInterrupt, EOFError, SystemExit, ValueError):
			    	print("Vous avez quitté volontairement")
			        break

	elif user_input == '2':
		print("Vous avez décidez d'ajouter une connaissance à Billy !\n\n")
		fonctions_bot.ajouter_connaissance()
		fonctions_bot.ajouter_encore_connaissance()

	elif user_input == '3':
		print("Vous avez décidé de retirer une connaissance à Billy\n")
		raw_input("Appuyer sur une touche pour afficher la liste des connaissances de Billy : ")
		fonctions_bot.supprimer_connaissance()				
	
	elif user_input == '4':
		print("\nVous pouvez activer ou désactiver les logs de Billy lors de la discussion")
		print("1. Activer les logs")
		print("2. Désactiver les logs")
		choix_log = raw_input("\nChoisir une option : ")
		if (choix_log == "1"):
			logging.basicConfig(level=logging.INFO)
			etat = "ACTIFS"
			print("Les logs sont " + etat)
		elif (choix_log == "2"):
			logging.disable(logging.INFO)
			etat = "INACTIF"
			print("Les logs sont " + etat)

	elif (user_input == 'Q'):
		print("Bonne journée !\n\n\n")
		break