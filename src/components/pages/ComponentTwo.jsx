import { Link } from "react-router-dom";

export default function ComponentTwo() {
  return (
    <div>
      <h2>ComponentTwo Heading</h2>
      <Link to="/component-one">CompOne</Link>
    </div>
  );
}
