import { render } from "react-dom"

export default (props) => (
  <>
    <div
      className={(props.first ? "text-header" : "text-header-not-first")}
    >
      <div className={"text-section"}>
        <h1>{props.title}</h1>
        {props.text}
      </div>
    </div>
  </>
)
