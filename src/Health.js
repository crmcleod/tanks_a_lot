const HealthBar = ({currentHealth, id}) => {
    return(
        <div className="health-bar" id={id}>
            <div className="health-level" style={{width: currentHealth +'%'}}/>
        </div>
    )
}

export default HealthBar