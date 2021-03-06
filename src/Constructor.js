import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Constructor extends Component {
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

		return script.match(/(?<=\bsrc=")(http|https):\/\/api-maps.yandex.ru\/services\/constructor\/[^"]*/);
	}

	render() {
		const { script } = this.props;

		return <div ref={this.yandexMap} />;
	}
};

Constructor.propTypes = {
	script: PropTypes.string
};

export default Constructor;