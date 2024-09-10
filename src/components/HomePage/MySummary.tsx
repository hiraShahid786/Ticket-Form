import React from 'react';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import './MySummary.scss'; // Import the SCSS file

const MySummary: React.FC = () => {
    const data = [
        { status: 'Requests', pending: 0, onHold: 0, completed: 0 }
    ];

    return (
        <div className="summary">
            <h3>My Summary</h3>
            <DataGrid
                dataSource={data}
                showBorders={true}
                style={{ width: '100%' }}
            >
                <Column dataField="status" caption="Requests" />
                <Column dataField="pending" caption="Pending" />
                <Column dataField="onHold" caption="On Hold" />
                <Column dataField="completed" caption="Completed" />
            </DataGrid>
        </div>
    );
};

export default MySummary;
