import { useBuilder } from '../contexts/BuilderContext';

export const useBuilderActions = () => {
  const context = useBuilder();
  
  if (!context) {
    throw new Error('useBuilderActions must be used within BuilderProvider');
  }

  const { state, dispatch } = context;

  const addComponent = (component: any) => {
    const newComponent = {
      id: Date.now().toString(),
      type: component.type,
      name: component.name,
      props: {
        text: component.name,
        color: 'blue',
        size: 'medium',
        ...component.props
      }
    };

    dispatch({
      type: 'ADD_COMPONENT',
      payload: newComponent
    });

    dispatch({
      type: 'SELECT_COMPONENT',
      payload: newComponent
    });
  };

  const selectComponent = (component: any | null) => {
    dispatch({ 
      type: 'SELECT_COMPONENT', 
      payload: component 
    });
  };

  const updateComponent = (id: string, props: any) => {
    dispatch({ 
      type: 'UPDATE_COMPONENT', 
      payload: { id, props } 
    });
  };

  const setDragging = (isDragging: boolean) => {
    dispatch({ 
      type: 'SET_DRAGGING', 
      payload: isDragging 
    });
  };

  const clearCanvas = () => {
    dispatch({ type: 'CLEAR_CANVAS' });
  };

  return {
    components: state.components,
    selectedComponent: state.selectedComponent,
    isDragging: state.isDragging,
    addComponent,
    selectComponent,
    updateComponent,
    setDragging,
    clearCanvas
  };
};
