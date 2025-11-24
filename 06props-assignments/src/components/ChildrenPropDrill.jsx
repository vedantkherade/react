export default function ChildrenPropDrill() {
    return (
      <div>
        <h2>Assignment 12 — Props Drilling + children together</h2>
        <Level1 message="Welcome User" />
      </div>
    )
    
}

function Level1({message}) {
    return <Level2 message={message} />
}

function Level2({message}) {
    return (
        <Card>
            <h3>{message}</h3>
        </Card>
    )
}

function Card({children}) {
    return (
        <div>{children}</div>
    )
}