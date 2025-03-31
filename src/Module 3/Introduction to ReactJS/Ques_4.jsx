// JSX Rules
// Description: Identify and correct errors in incorrect JSX syntax.

function Error() {
    return (
        <div>
            <h1>Unclosed tag
            <p>Self-closing tag example <img src="example.png"></img></p>
            <ul>
                <li>List item 1
                <li>List item 2
            </ul>
        </div>
    );
}


