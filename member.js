function skillsMember() {
    var skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Python'];
    var index = 0;
    return {
        next: function() {
            if (index < skills.length) {
                return {
                    value: skills[index++],
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}