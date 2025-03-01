function skillsMember() {
    var skillMember = document.getElementById("skillMember");
    var skillMemberValue = skillMember.value;
    var skillMemberValue = parseInt(skillMemberValue);
    if (skillMemberValue < 0 || skillMemberValue > 100) {
        alert("请输入0-100之间的数字");
        skillMember.value = "";
    }
}
