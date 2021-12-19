export default function AddNewPomo(props) {

  return (
    <div className={`form-div ${props.isFormShow ? 'display' : 'hidden'}`}>
    <button className="close-form" onClick={() => props.hideForm()}>X</button>
    <form onSubmit={props.handle.handleSubmit}>

      <div className="set-title">
      <label> Session Title:</label>
      <input type="text" className="" pattern="[a-zA-Z0-9]{6,20}" defaultValue={"Pomodoro"} required
          size={15} maxLength={20} onChange={(event) => props.handle.handleTitleChange(event)}/>
      <br/>
      </div>
      <div className="set-time-break-goal">
      <div className="time">
      <p>Session</p>
      <div>
          <button type="button" id="add-sesstion-length"
            onClick={() => props.handle.handleSessionIncre()}>▲</button>
          {props.ClockInfo.session < 10 ? "0" + props.ClockInfo.session : props.ClockInfo.session}
          <button type="button" id="reduce-sesstion-length"
            onClick={() =>props.handle.handleSessionDecre() }>▼</button>
        </div>
      </div>

      <div className="break">
      <p>Break</p>
      <div>
          <button type="button" onClick={() => props.handle.handleBreakIncre()}>▲</button>
          {props.ClockInfo.break < 10 ? "0" + props.ClockInfo.break : props.ClockInfo.break}
          <button type="button" onClick={() => props.handle.handleBreakDecre()}>▼</button>
        </div>
      </div>

      <div className="goal">
      <p>Goal</p>
      <div>
          <button type="button" onClick={() => props.handle.handleGoalIncre()}>▲</button>
          {props.ClockInfo.goal < 10 ? "0" + props.ClockInfo.goal : props.ClockInfo.goal}
          <button type="button" onClick={() => props.handle.handleGoalDecre()}>▼</button>
        </div>
      </div>
      </div>
      <button type="button" className="submit-btn" onClick={() => props.handle.handleSetTime()}>submit</button>
    </form>
  </div>
  )
}
