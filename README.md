# EasyDateJS
Classe simples em JS para lidar com datas. Permite o acesso mais simples a dia/mês/ano, a uma forma de conversão mais simples para string e objeto Date e comparações entre datas, utilizando o formato epoch

# Why?
Turns out that the native class "Date" found in JavaScript lacks certain useful methods (like a decent dd/mm/yyyy string output or a simple day/month/year getter).
For this reason, this class was created. There's probably something much better than this out there, but I figured a simple class that gets the job done is all I need for my issues, and who knows, maybe for someone elses too.

Features:
- toString() returns the format dd/mm/yyyy
- A method for converting data to an epoch value (in seconds)
- A method for comparing two dates based on their epoch values
