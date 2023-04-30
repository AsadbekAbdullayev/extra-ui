import { Container } from './style';

const statusRenderer = ({ data }) => {
  return (
    <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
      <Container.Status status={data?.status}>{data?.status}</Container.Status>
    </div>
  );
};

export const column = [
  {
    headerName: 'name',
    field: 'name',
    //   cellRenderer: startsInRenderer,
    //   width: 100,
    resizable: true,
  },
  {
    headerName: 'age',
    field: 'age',
    //   cellRenderer: startsInRenderer,
    //   width: 100,
    resizable: true,
  },
  {
    headerName: 'email',
    field: 'email',
    //   cellRenderer: startsInRenderer,
    //   width: 100,
    resizable: true,
  },
  {
    headerName: 'status',
    cellRenderer: statusRenderer,
    //   width: 100,
    resizable: true,
  },
  {
    headerName: 'number',
    field: 'number',
    //   cellRenderer: startsInRenderer,
    //   width: 100,
    resizable: true,
  },
];
