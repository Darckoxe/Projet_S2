#!/usr/bin/env python
#coding: utf-8
import json
import codecs

def menu():
	print("\n\n----- MENU DE NAVIGATION -----")
	print("\n1. Discuter avec Billy")
	print("2. Ajouter une connaissance à Billy")
	print("3. Supprimer une connaissance à Billy")
	print("4. Activer/Désactiver les logs de Billy dans le chat")
	print("Q. Quitter")

def ajouter_connaissance():
   corpus = load("trivia.json") #on charge le corpus
   question = raw_input("Question à poser : ")
   reponse = raw_input("Réponse que Billy devra donner : ")

   #on recherche la plus petite clé disponible
   cles = [] #on créé une liste de clé vide
   for key in corpus.keys(): #on parcours les clés du dictionnaire qu'on insère dans la liste des clés
      cles.append(key)
   cles.sort()
   
   cles = (map(int, cles)) #conversion de la liste en liste de int

   indice = 0
   k = 0
   while indice < len(cles):
    if (indice == cles[indice]): # si la valeur à l'indice est la même, la clé vaut indice+1
        k = indice+1
    elif(indice != cles[indice]): #si la valeur à l'indice est differente alors la clé vaut k
        break
    indice+=1

   cles.append(k) #on ajoute la nouvelle clé à la liste pour ne pas la réutiliser
   cles.sort() #on trie les valeurs par ordre croissant
   
   corpus[k] = [] #on créé une nouvelle liste dans le corpus avec pour clé la valeur k calculé avant
   corpus[k].append([question, reponse]) #on y insère la question et la réponse

   save(corpus, "trivia.json")
   print("\nBilly a appris une nouvelle connaissance !\n")

def supprimer_connaissance():
    corpus = load("trivia.json") #on charge le corpus
    print(json.dumps(corpus, "trivia.json", indent=4)) #on l'affiche de façon lisible

    cle_suppression = raw_input("Numéro de la connaissance à supprimer : ")
    try:
    	del corpus[cle_suppression]
    	print("\nBilly a bien oublié sa connaissance !")
    except:
    	print("\nCette valeur n'existe pas ... Retour au menu")
    finally:
      save(corpus,"trivia.json")

def ajouter_encore_connaissance():
	q=True
	while (q):
		print("Souhaitez-vous ajouter une nouvelle connaissance à Billy ? O/N")
		choix = raw_input()
		if (choix == 'O' or choix == 'o'):
			ajouter_connaissance()
		elif (choix == 'N' or choix == 'n'):
			break

def supprimer_encore_connaissance():
	q=True
	while (q):
		print("Souhaitez-vous supprimer une connaissance à Billy ? O/N")
		choix = raw_input()
		if choix == 'O':
			supprimer_connaissance()
		elif choix == 'N':
			break

def load(filename):
    "Charge le fichier JSON 'filename'."
    with open(filename) as file:
        return json.load(file)

def save(data, filename):
    "Sauvegarde les données 'data' (un dict) dans le fichier JSON 'filename'."
    with codecs.open(filename, 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=4, ensure_ascii=True)

def convert(lists):
    "Convertie une liste de listes en une liste de dictionnaires"
    results = []
    for list in lists:
        dict = {}
        for key, value in zip(('question', 'reponse')), list:
            dict[key] = value
        results.append(dict)
    return results

def conversion_dico(in_file, out_file):
	input_file = in_file
	output_file = out_file
	
	data = load(input_file) #on charge le fichier json source
	lists = data['trivia']
	
	dicts = convert(lists) #on convertie le fichier json source en un dictionnaire
	data['trivia'] = dicts
	
	save(data, output_file) #on sauvegarde le dictionnaire dans un nouveau fichier