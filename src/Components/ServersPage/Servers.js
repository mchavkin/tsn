import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadServers } from '../../redux/actions';
import TopBar from './TopBar';
import ServersTable from './ServersTable';

function Servers({ loadServers }) {
  useEffect(loadServers);
  return (
    <>
      <TopBar />
      <ServersTable />
    </>
  );
}

export default connect(null, { loadServers })(Servers);
