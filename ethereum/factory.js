import web3 from './web3';
import CampaignFactory from './build/CampaignFactory';

const abi = CampaignFactory.abi;

const instance = new web3.eth.Contract(abi, '0x2a030153B4C38301863a085d363C6b778e0bf90f')

export default instance;