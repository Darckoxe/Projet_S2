# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

def home(request):
    return render(request, 'chatbot/index.html')

def initBilly(request):
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


# Create your views here.
