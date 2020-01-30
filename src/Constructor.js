import React, { Component } from 'react';

export default class Constructor extends Component {
	constructor(props) {
		super(props);

		this.yandexMap = React.createRef();
	}

	componentDidMount() {
		if(this.props.script) {
			const script = document.createElement("script");
			const src = this.deconstruct(this.props.script);

			if(src) {
				script.src = src;
				script.async = true;

				this.yandexMap.current.appendChild(script);
			}
		}
	}

	componentWillUnmount() {
		while(this.yandexMap.current.firstChild) {
			this.yandexMap.current.removeChild(this.yandexMap.current.firstChild);
		}
	}

	deconstruct(script) {
		if(typeof script !== 'string') return false;

		return script.match(/(?<=\bsrc=")[^"]*/);
	}

	render() {
		const { script } = this.props;

		return <div ref={this.yandexMap} />;
	}
};