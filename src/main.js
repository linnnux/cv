let url = "http://127.0.0.1:3000/api/teddies";

var user = {
            "firstName" : "nassim",
            "lastName"  : "meziani",
            "jobTitle"  : "Consultant IT"
           };

var skills = {
                "softSkills":
                [
                    {"skill" : "Créativité"},
                    {"skill" : "Esprit d’entreprendre"},
                    {"skill" : "Audace"},
                    {"skill" : "Motivation"},
                    {"skill" : "vision"},
                    {"skill" : "visualisation"},
                    {"skill" : "Résolution de problèmes"},
                    {"skill" : "confiance"},
                    {"skill" : "optimisme"},
                    {"skill" : "Intelligence émotionnelle"},
                    {"skill" : "Présence"},
                    {"skill" : "Sens du collectif"},
                    {"skill" : "Empathie"},
                    {"skill" : "Gestion du stress"}
                ],
                "backEnd":
                [
                    {"skill" : "PHP 7"},
                    {"skill" : "symfony 4"},
                    {"skill" : "JS"},
                ],
                "frontEnd":
                [
                  {"skill" : "HTML5"},
                  {"skill" : "CSS3"},
                  {"skill" : "w3.css"},
                  {"skill" : "twig"},
                  {"skill" : "JS"},
                  {"skill" : "PHP7"},
                  {"skill" : "w3.js"},
                  {"skill" : "jQuery"},
                ],
                "frameWorks":
                [
                  {"skill" : "symfony 4"},
                  {"skill" : "node.JS"},
                  {"skill" : "express"},
                ],
                "versionning":
                [
                  {"skill" : "git"},
                  {"skill" : "svn"},
                ],
                "ide":
                [
                  {"skill" : "xCode"},
                  {"skill" : "Android Studio"},
                  {"skill" : "Atom"},
                ],
                "ftp":
                [
                  {"skill" : "fileZilla"},
                ],


};

function myCallback()
{

  for (var skill in skills)
  {
    w3.displayObject(skill, skills);
  }


  w3.displayObject("id01", user);

}
