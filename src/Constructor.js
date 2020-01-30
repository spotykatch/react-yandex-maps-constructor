import React, { Component } from 'react';

export default class Constructor extends Component {
	constructor(props) {
		super(props);

		this.yandexMap = React.createRef();
	}

	componentDidMount() {
		if(this.props.script) {
			const script = document.createElement("script");

			script.src = this.deconstruct(this.props.script);
			script.async = true;

			this.yandexMap.current.appendChild(script);
		}
	}

	componentWillUnmount() {
		while(this.yandexMap.current.firstChild) {
			this.yandexMap.current.removeChild(this.yandexMap.current.firstChild);
		}
	}

	deconstruct(script) {
		if(typeof script !== 'string') return false;

		const strArray = script.split(' ');

		for(let i = 0; i < strArray.length; i++)
			if(strArray[i].indexOf('src') === 0) return strArray[i].slice(5);

		return false;
	}

	render() {
		const { script } = this.props;

		return <div ref={this.yandexMap} />;
	}
};