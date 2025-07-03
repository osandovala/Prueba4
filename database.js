function initDatabase() {
    var db = window.sqlitePlugin.openDatabase({
        name: 'hgt_tour.db',
        location: 'default'
    });
    
    db.transaction(function(tx) {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS maquinas (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                patente TEXT,
                marca TEXT,
                modelo TEXT,
                fabricante TEXT,
                codigo_serie TEXT,
                observaciones TEXT,
                fotografia TEXT,
                mttr REAL,
                area TEXT,
                horas INTEGER,
                anio INTEGER,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`
        );
    }, function(error) {
        console.error('Error al crear tabla maquinas:', error);
    }, function() {
        console.log('Tabla maquinas creada o ya existente');
    });
}

document.addEventListener('deviceready', initDatabase, false);