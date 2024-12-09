import { providers } from "ethers";
import { RequestNetwork, Types } from "@requestnetwork/request-client.js";
import { Web3SignatureProvider } from "@requestnetwork/web3-signature";

// A function that initializes and returns the RequestClient with the given provider
const createRequestClient = (provider: providers.Web3Provider) => {
  const signatureProvider = new Web3SignatureProvider(provider);

  return new RequestNetwork({
    nodeConnectionConfig: {
      baseURL: "https://sepolia.gateway.request.network/",
    },
    signatureProvider,
  });
};

// A function that fetches and processes requests for the given Ethereum address
export const getRequestsForAddress = async (address: string) => {
  // Initialize a Web3 provider for the current Ethereum window
  // @ts-ignore
  const provider = new providers.Web3Provider(window.ethereum);

  // Create a RequestClient instance
  const requestClient = createRequestClient(provider);

  // Fetch requests associated with the provided address
  const requests = await requestClient.fromIdentity({
    type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
    value: address,
  });

  console.log(requests)

  // Map the requests to a simpler summary format
  const requestSummaries = requests.map((request) => {
    const requestData = request.getData();

    return {
      requestId: requestData.requestId,
      payee: requestData.payee?.value,
      expectedAmount: requestData.expectedAmount.toString(),
      timestamp: requestData.timestamp,
      state: requestData.state,
      currencySymbol: requestData.currency,
    };
  });

  return requestSummaries;
};
