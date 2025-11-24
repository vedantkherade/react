export default function ShowMessage() {
    const isLoggedIn = false;
    const username = "Ujjwal";

    return (
        <div>
            <h2>Assignment 1 — Show a message only if user is logged in</h2>
            {isLoggedIn ? (
                <p>Welcome {username}</p>
            ) : (
                <p>Please login first!</p>
            )}
        </div>
    )
}


