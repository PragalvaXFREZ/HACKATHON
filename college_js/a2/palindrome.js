let word;
function chker(word)
{
    let rev='';

for(let i=word.length-1 ;i>=0;i--)
    {
        rev+=word[i];   
    }
    if(rev==word)
        {
            console.log("It is palindrome");
        }
        else
        {
            console.log("It is not palindrome");
        }
        
}
chker("121");
chker("ok");
chker("lol");
