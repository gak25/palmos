let baseUrl;

switch (process.env.NODE_ENV) {
	case 'production':
		baseUrl = 'https://www.palmos.co/';
		break;
	default:
		baseUrl = 'http://localhost:3000';
	// baseUrl = 'https://nsnradkerk.localtunnel.me';
}

export default baseUrl;
