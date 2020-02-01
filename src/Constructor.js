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
				script.type = 'text/javascript';
				script.charset = "utf-8";
				script.src = src;
				script.async = true;

				this.yandexMap.current.appendChild(script);
			} else {
				console.error('React-Yandex-Maps-Constructor: Bad script format. Put full script string to the script tag from <script ... to </script>.');
			}
		} else {
			console.error('React-Yandex-Maps-Constructor: script tag not found.');
		}
	}

	componentWillUnmount() {
		while(this.yandexMap.current.firstChild) {
			this.yandexMap.current.removeChild(this.yandexMap.current.firstChild);
		}
	}

	deconstruct(script) {
		if(typeof script !== 'string') return false;

		const result = script.match(/(?<=\bsrc=")[^"]*/);

		if(result[0].search(/^(http|https):\/\/api-maps.yandex.ru\/services\/constructor\//) === 0)
			return result;
		else return false; 
	}

	render() {
		const { script } = this.props;

		return <div ref={this.yandexMap} />;
	}
};