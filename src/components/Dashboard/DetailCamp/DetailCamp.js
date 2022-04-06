import React from "react";
import { useParams } from "react-router-dom";
import "./DetailCamp.css";

export default function DetailCamp() {
	const { topicId } = useParams();
	return <div>WW{topicId}</div>;
}
