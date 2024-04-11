import {
	Plugin,
} from "obsidian";

export default class PromptHotkeysPlugin extends Plugin {

	async onload() {
		this.registerDomEvent(document, "keydown", (evt: KeyboardEvent) => {
			if (evt.ctrlKey && !evt.shiftKey && !evt.metaKey && !evt.altKey) {
				if (evt.key === "c") {
					const prompt = document.querySelector(".prompt");
					if (prompt) {
						window.dispatchEvent(new KeyboardEvent("keydown",{
                            code: "Escape",
                            key: "Escape",
                            shiftKey: false,
                            altKey: false,
                            ctrlKey: false,
                            metaKey: false,
                            repeat: false
                        }))
					}
				}
				if (evt.key === "n") {
					const prompt = document.querySelector(".prompt");
					if (prompt) {
						window.dispatchEvent(new KeyboardEvent("keydown",{
                            code: "ArrowDown",
                            key: "ArrowDown",
                            shiftKey: false,
                            altKey: false,
                            ctrlKey: false,
                            metaKey: false,
                            repeat: true
                        }))
					}
				}
				if (evt.key === "p") {
					const prompt = document.querySelector(".prompt");
					if (prompt) {
						window.dispatchEvent(new KeyboardEvent("keydown",{
                            code: "ArrowUp",
                            key: "ArrowUp",
                            shiftKey: false,
                            altKey: false,
                            ctrlKey: false,
                            metaKey: false,
                            repeat: true
                        }))
					}
				}
			}
		});
	}

	onunload() {}
}
