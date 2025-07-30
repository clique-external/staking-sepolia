Deploying Staking Subgraph to TheGraph Studio
=========================================

This guide provides step-by-step instructions for deploying the staking subgraph to TheGraph Studio.

Prerequisites
------------

1. Node.js installed
2. Package manager (npm, yarn, or pnpm)
3. The Graph CLI installed globally
4. MetaMask or another Web3 wallet
5. Access to TheGraph Studio (https://thegraph.com/studio/)

Installation
-----------

1. Install The Graph CLI globally:

   .. code-block:: bash

      # Using yarn
      yarn global add @graphprotocol/graph-cli

      # Using npm
      npm install -g @graphprotocol/graph-cli

Contract Address Updates
----------------------

Before deploying, update the contract addresses in ``subgraph.yaml`` to match your production environment. Current addresses in the Sepolia testnet configuration:

.. code-block:: yaml

   # Contract 1
   address: "0x37414A02355Ca0e54DbDA169844EfE9E17d734ae"

   # Contract 2
   address: "0xFa24957Dad8944A14778f455f4dd97aD25FE6673"

   # Contract 3
   address: "0x6dEC7243B3ffe6D368F8645f0eBe302A41774471"

   # Contract 4
   address: "0xAcBF9A3B3Fd4089C4A289e18F69B5d14777da7c7"

   # Contract 5
   address: "0x2DD96Ee17E9c1512CCb68fe2B0F66C4eD54273AC"

   # Contract 6
   address: "0xe13bC87718FC0dfe860A0A468929CFF2a0Ce177c"

Replace these addresses with your production contract addresses.

Deployment Steps
--------------

1. Create a new Subgraph in TheGraph Studio:

   a. Visit https://thegraph.com/studio/
   b. Connect your wallet
   c. Click "Create a Subgraph"
   d. Name your subgraph and click "Create"

2. Get your deploy key:

   a. After creating the subgraph, you'll see your unique deploy key
   b. Copy this key for authentication

3. Authenticate with The Graph:

   .. code-block:: bash

      graph auth <DEPLOY_KEY>

4. Prepare your subgraph:

   .. code-block:: bash

      # Install dependencies
      yarn install

      # Generate types
      yarn codegen

      # Build the subgraph
      yarn build

5. Deploy the subgraph:

   .. code-block:: bash

      graph deploy --studio <SUBGRAPH_NAME>

   Replace ``<SUBGRAPH_NAME>`` with your subgraph's name from TheGraph Studio.

6. When prompted, enter a version label (e.g., "0.0.1")

Testing
-------

1. After deployment, test your subgraph in TheGraph Studio's playground
2. Use the development query URL for testing in your application
3. Check the indexing status and logs in the Studio dashboard

Important Notes
-------------

1. The development query URL has a limit of 3,000 queries per day
2. Each account is limited to 3 deployed (unpublished) subgraphs
3. Previous versions are automatically archived when deploying new versions
4. Make sure to test thoroughly before publishing to the decentralized network

Troubleshooting
-------------

1. If deployment fails:
   - Check contract addresses are correct
   - Verify all events in the subgraph manifest match the contract ABI
   - Review the indexing status in TheGraph Studio
   - Check the logs for any specific error messages

2. If queries return no data:
   - Verify the contract addresses are correct
   - Check if the contracts have emitted any events
   - Verify the start block in the manifest is correct
   - Check if the subgraph has completed indexing

Publishing to the Network
-----------------------

Once testing is complete and you're ready to publish to the decentralized network:

1. Visit your subgraph in TheGraph Studio
2. Click "Publish"
3. Follow the prompts to publish to the network
4. Fund the subgraph with GRT for curation

Remember that publishing to the network requires GRT tokens and involves transaction fees.

Maintenance
----------

1. To update your subgraph:
   - Deploy a new version to Studio
   - Test thoroughly
   - Publish the new version when ready

2. Monitor your subgraph's performance:
   - Check indexing status regularly
   - Monitor query usage
   - Review error logs

For more information, visit the official documentation at https://thegraph.com/docs/ 