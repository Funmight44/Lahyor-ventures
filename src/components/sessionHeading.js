const SessionHeading = ({title}) => {
    SessionHeading.defaultProps={

    }

    SessionHeading.prototype={
        title: String
    }
    return ( 
        <div className="">
            <div></div>
            <p className="session-title">{title}</p>
        </div>
     );
}
 
export default SessionHeading;