# EasyDateJS
Simple Javascript class to deal with dates.

# Why?
Turns out that the native class "Date" found in JavaScript lacks certain useful methods (like a decent dd/mm/yyyy string output or a simple day/month/year getter).
For this reason, this class was created. There's probably something much better than this out there, but I figured a simple class that gets the job done is all I need for my issues, and who knows, maybe for someone elses too.

Features:
- Easier acess to day/month/year variables
- A method for converting data to an epoch value (in seconds)
- A method for comparing two dates based on their epoch values
- toString() returns in the format "dd/mm/yyyy"
