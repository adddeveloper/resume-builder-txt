var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var phonenumber = document.getElementById("phonenumber");
var email = document.getElementById("email");
var website = document.getElementById("website");
var street = document.getElementById("street");
var city = document.getElementById("city");
var country = document.getElementById("country");
var postalcode = document.getElementById("postalcode");

function downloadTxtFile() {
    var content = `${firstname.value} ${lastname.value}\n${website.value}\n${email.value}\n${phonenumber.value}\n${street.value}, ${city.value}, ${country.value}`;
    var objective_content = "";
    var education_content = "";
    var experience_content = "";
    var certification_content = "";
    var reference_content = "";
    var skills_content = "";
    for (let i = 0; i < objective_holder.children.length; i++) {
        if(objective_holder.children[i].value != ""){
            objective_content += objective_holder.children[i].value + "\n";
        }
    }

    for (let i = 0; i < education_holder.children.length; i++) {
        if(education_holder.children[i].children[0].children[0].value != ""){
            education_content += education_holder.children[i].children[0].children[0].value + "\n";
            education_content += education_holder.children[i].children[0].children[1].value + "\n";
            education_content += education_holder.children[i].children[1].children[0].value + " to ";
            education_content += education_holder.children[i].children[1].children[1].value;
        }
        education_content += "\n";
        education_content += "\n";
    }

    for (let i = 0; i < experience_holder.children.length; i++) {
        if(experience_holder.children[i].children[0].children[0].value != ""){
            experience_content += experience_holder.children[i].children[0].children[0].value + "\n";
            experience_content += experience_holder.children[i].children[0].children[1].value + "\n";
            experience_content += experience_holder.children[i].children[1].children[0].value + " to ";
            experience_content += experience_holder.children[i].children[1].children[1].value;
        }
        experience_content += "\n";
        experience_content += "\n";
    }

    for (let i = 0; i < certification_holder.children.length; i++) {
        const element = certification_holder.children[i];
        if(certification_holder.children[i].children[0].children[0].value != ""){
            certification_content += certification_holder.children[i].children[0].children[0].value + "\n";
            certification_content += certification_holder.children[i].children[0].children[1].value + "\n";
        }
        certification_content += "\n";
        certification_content += "\n";
    }

    for (let i = 0; i < reference_holder.children.length; i++) {
        if(reference_holder.children[i].children[0].children[0].value != ""){
            reference_content += reference_holder.children[i].children[0].children[0].value + "\n";
            reference_content += reference_holder.children[i].children[0].children[1].value + "\n";
            reference_content += reference_holder.children[i].children[1].children[0].value + "\n";
            reference_content += reference_holder.children[i].children[1].children[1].value;
        }
        reference_content += "\n";
        reference_content += "\n";
    }

    for (let i = 0; i < skills_holder.children.length; i++) {
        if(skills_holder.children[i].children[0].children[0].value != ""){
            skills_content += skills_holder.children[i].children[0].children[0].value + "\n";
            skills_content += skills_holder.children[i].children[0].children[1].value + "\n";
        }
        skills_content += "\n";
        skills_content += "\n";
    }

    var arr = [
        content,
        "\n\n",
        objective_content,
        "\n\nEducation:\n",
        education_content,
        "\n\nExperience:\n",
        experience_content,
        "\n\nCertification:\n",
        certification_content,
        "\n\nReference:\n",
        reference_content
    ];
    console.log(arr)
    const blob = new Blob(arr, { type: "text/plain" });
    const link = document.createElement("a");
    link.download = "resume.txt";
    link.href = URL.createObjectURL(blob);
    link.click();
}
  