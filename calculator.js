function clear_display()
{
    document.getElementById('user_input').value="";
}
function change_input(value)
{
    document.getElementById('user_input').value+=value;
}
function result_display()
{
    var variable=document.getElementById('user_input');
    var result=eval(variable.value);
    if (isFinite(result))
    {
        variable.value=result;
    }
    else if (isNaN(result))
    {
        variable.value="Error. Possibility-negative number inside square root?";
    }
    else
    {
        variable.value="Error. Possibility-division by zero, invalid argument in trigonometric function."
    }
}
