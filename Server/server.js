import express from "express";
import fs from "fs";
import path from "path";
import { StaticRouter } from "react-router-dom";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";
import { SSRProvider } from "@react-aria/ssr";
const app = express();
const PORT = process.env.PORT || 8001;

// const router = express.Router();
// app.use("/build", express.static("build"));

// app.use((req, res, next) => {
// 	if (/\.js|\.css|\.png|\.jpg|\.jpeg/.test(req.path)) {
// 		res.redirect("/build" + req.path);
// 	} else {
// 		next();
// 	}
// });

app.use("^/$", (req, res, next) => {
	const context = {};

	fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
		if (err) {
			console.log(err);
			return res.status(500).send("some error happend");
		}
		return res.send(
			data.replace(
				'<div id="root"></div>',
				`<div id="root">${ReactDOMServer.renderToString(
					<SSRProvider>
						<StaticRouter location={req.url} context={context}>
							<App />
						</StaticRouter>
					</SSRProvider>
				)}</div>`
			)
		);
	});
});
app.use(
	express.static(path.resolve(__dirname, "..", "build"), { maxAge: "10d" })
);

app.listen(PORT, () => {
	console.log(`app launched on ${PORT}`);
});
